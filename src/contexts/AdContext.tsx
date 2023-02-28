import { createContext, useCallback, useContext, useState } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
import { IUser } from "../interfaces/user"
import { IAd, IAdContextData, IListImage, IProviderProps, IRegister } from "../interfaces/ads"

import jwt_decode from "jwt-decode"


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
  const [adsInfo, setAdsInfo] = useState<IAd>({} as IAd)
  const [imgs, setImgs] = useState<IListImage[]>([])

  const registerAds = useCallback(async ({
    title, adType, description, images, mileage, motorType, price, year}: IRegister) => {
    const decoded: any = jwt_decode(token)
    const userId = decoded.sub
    
    await api.post("/ads", {title, adType, description, images, mileage, motorType, price, year}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((resp) => {
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
        setUserInfo(res.data[0].user)
      })
      .catch((err) => console.log(err))
    
  }, [])

  const listOneAds = async (adsId: string) => {
    await api
      .get(`/ads/${adsId}`)
      .then((data) => {
        console.log(data.data)
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
      value={{ 
        ads, 
        adsByUser, 
        userInfo, 
        adsInfo,
        imgs,
        listAds, 
        deleteAd, 
        listAdsByUser, 
        registerAds, 
        listOneAds,
      }}
    >
      {children}
    </AdContext.Provider>
  )
}

export { AdProvider, useAd }
