import { createContext, useContext, useState } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
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

  const listContacts = async () => {
    await api
      .get("/ads")
      .then((res) => {
        setAds(res.data.data)
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
        listContacts()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AdContext.Provider value={{ ads, listContacts, deleteAd }}>
      {children}
    </AdContext.Provider>
  )
}

export { AdProvider, useAd }
