import { createContext, useContext, useState } from "react";

import { api } from "../services/api";
import { useAuth } from "./AuthContext";
import { IUser } from "../interfaces/user";
import { IAd, IAdContextData, IProviderProps } from "../interfaces/ads";
import { IComment } from "../interfaces/comments";

const AdContext = createContext<IAdContextData>({} as IAdContextData);

const useAd = () => {
  const context = useContext(AdContext);

  if (!context) {
    throw new Error("AdContext must be used within an AdProvider");
  }
  return context;
};

const AdProvider = ({ children }: IProviderProps) => {
  const { token } = useAuth();
  const [update, setUpdate] = useState(0);
  const [ads, setAds] = useState<IAd[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [adsByUser, setAdsByUser] = useState<IAd[]>([]);
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser);

  const listAds = async () => {
    await api
      .get("/ads")
      .then((res) => {
        setAds(res.data.data.filter((ad: IAd) => ad.isDelete === false));
      })
      .catch((err) => console.log(err));
  };

  const listAdsByUser = async (userId: string) => {
    await api
      .get(`/users/${userId}/ads`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAdsByUser(res.data.filter((ad: IAd) => ad.isDelete === false));
        setUserInfo(res.data[0].user);
      })
      .catch((err) => console.log(err));
  };

  const deleteAd = async (adId: string) => {
    await api
      .delete(`/ads/${adId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        listAds();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listOneAd = async (adId: string | undefined) => {
    await api
      .get(`/ads/${adId}`)
      .then((res) => {
        // console.log("LIST ONE: ", res.data);
        setAds([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listCommentsForOneAd = async (adId: string | undefined) => {
    await api
      .get(`/comments/${adId}`)
      .then((res) => {
        // console.log("LIST COMMENT", res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createCommentForOneAd = async (
    adId: string | undefined,
    content: string
  ) => {
    await api
      .post(
        `/comments`,
        { content, adId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setUpdate(update + 1);
        // console.log("Criado", res.data);
        // setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AdContext.Provider
      value={{
        ads,
        adsByUser,
        comments,
        userInfo,
        listAds,
        deleteAd,
        listAdsByUser,
        listOneAd,
        listCommentsForOneAd,
        createCommentForOneAd,
        update,
        setUpdate,
      }}
    >
      {children}
    </AdContext.Provider>
  );
};

export { AdProvider, useAd };
