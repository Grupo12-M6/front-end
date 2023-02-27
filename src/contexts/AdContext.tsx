import { createContext, useContext, useState } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
import { IUser } from "../interfaces/user"
import { IAd, IAdContextData, IProviderProps } from "../interfaces/ads"

const AdContext = createContext<IAdContextData>({} as IAdContextData)

const useAd = () => {
  const context = useContext(AdContext)

  if (!context) {
    throw new Error("AdContext must be used within an AdProvider")
  }
  return context
}

const AdProvider = ({ children }: IProviderProps) => {
  const { token } = useAuth()

  const [ads, setAds] = useState<IAd[]>([])
  const [adsByUser, setAdsByUser] = useState<IAd[]>([])
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser)

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
        setUserInfo(res.data[0].user)
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
        listAds()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AdContext.Provider
      value={{ ads, adsByUser, userInfo, listAds, deleteAd, listAdsByUser }}
    >
      {children}
    </AdContext.Provider>
  )
}

export { AdProvider, useAd }
