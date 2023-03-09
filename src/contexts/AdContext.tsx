import { createContext, useCallback, useContext, useState } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
import {
  IAd,
  IAdContextData,
  IListImage,
  IProviderProps,
  IRegister,
  IUpdate,
} from "../interfaces/ads"
import { IComment, ICommentUpdate } from "../interfaces/comments"
import { IUser } from "../interfaces/user"
import jwt_decode from "jwt-decode"
import { useToast } from "@chakra-ui/react"

const AdContext = createContext<IAdContextData>({} as IAdContextData)

const useAd = () => {
  const context = useContext(AdContext)

  if (!context) {
    throw new Error("AdContext must be used within an AdProvider")
  }
  return context
}

const AdProvider = ({ children }: IProviderProps) => {
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser)
  const { token } = useAuth()
  const toast = useToast()

  const [update, setUpdate] = useState(0)
  const [ads, setAds] = useState<IAd[]>([])
  const [comments, setComments] = useState<IComment[]>([])
  const [adsByUser, setAdsByUser] = useState<IAd[]>([])
  const [adsInfo, setAdsInfo] = useState<IAd>({} as IAd)
  const [imgs, setImgs] = useState<IListImage[]>([])

  const registerAds = useCallback(
    async ({
      title,
      adType,
      description,
      images,
      mileage,
      motorType,
      price,
      year,
    }: IRegister) => {
      const decoded: any = jwt_decode(token)
      const userId = decoded.sub

      await api
        .post(
          "/ads",
          {
            title,
            adType,
            description,
            images,
            mileage,
            motorType,
            price,
            year,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((resp) => {
          toast({
            title: 'Criação de Anúncio.',
            description: "Anúncio criado com sucesso",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
            containerStyle: {
              marginTop: "83px",
              marginRight: "20px",
            }
          })
          console.log(resp.data)
        })
        .catch((err) => console.log(err))

      await api
        .get(`/users/${userId}/ads`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setAdsByUser(res.data.filter((ad: IAd) => ad.isDelete === false))
        })
        .catch((err) => console.log(err))
    },
    []
  )

  const updateAds = useCallback(async (adsId: string, { ...data }: IUpdate) => {
    await api
      .patch(
        `/ads/${adsId}`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        setUpdate(update + 1)
        console.log(data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const listOneAds = async (adsId: string) => {
    await api
      .get(`/ads/${adsId}`)
      .then((data) => {
        setAdsInfo(data.data)
        setImgs(data.data.images)
      })
      .catch((err) => console.log(err))
  }

  const listAds = async () => {
    await api
      .get("/ads")
      .then((res) => {
        setAds(res.data.data.filter((ad: IAd) => ad.isDelete === false))
      })
      .catch((err) => console.log(err))
  }

  const listAdsByUser = async (userId: string) => {
    await api
      .get(`/users/${userId}/ads`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAdsByUser(res.data.filter((ad: IAd) => ad.isDelete === false))
      })
      .catch((err) => console.log(err))
  }

  const deleteAd = async (adId: string) => {
    await api
      .delete(`/ads/${adId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUpdate(update + 1)

        listAds()

        toast({
          title: 'Deleção de Anúncio.',
          description: "Anúncio excluído com sucesso",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          containerStyle: {
            marginTop: "83px",
            marginRight: "20px",
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const listOneAd = async (adId: string | undefined) => {
    await api
      .get(`/ads/${adId}`)
      .then((res) => {
        // console.log("LIST ONE: ", res.data);
        setAds([res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const listCommentsForOneAd = async (adId: string | undefined) => {
    await api
      .get(`/comments/${adId}`)
      .then((res) => {
        // console.log("LIST COMMENT", res.data);
        setComments(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
        setUpdate(update + 1)
        // console.log("Criado", res.data);
        // setComments(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateComment = async (data: ICommentUpdate, id: string) => {
    await api
      .patch(`/comments/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUpdate(update + 1)

        toast({
          title: 'Edição de Anúncio.',
          description: "Anúncio alterado com sucesso",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          containerStyle: {
            marginTop: "83px",
            marginRight: "20px",
          }
        })
        // console.log("Criado", res.data);
        // setComments(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteComment= async (id: string) => {
    await api
      .delete(`/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUpdate(update + 1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AdContext.Provider
      value={{
        ads,
        adsByUser,
        adsInfo,
        imgs,
        listAds,
        deleteAd,
        listAdsByUser,
        registerAds,
        listOneAds,
        updateAds,
        listCommentsForOneAd,
        createCommentForOneAd,
        update,
        listOneAd,
        setUpdate,
        comments,
        updateComment,
        deleteComment
      }}
    >
      {children}
    </AdContext.Provider>
  )
}

export { AdProvider, useAd }
