import { createContext, useContext, useState } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
import {
  IProviderProps,
  IUpdateAddressData,
  IAddressContextData,
} from "../interfaces/address"

const AddressContext = createContext<IAddressContextData>(
  {} as IAddressContextData
)

const useAddress = () => {
  const context = useContext(AddressContext)

  if (!context) {
    throw new Error("AddressContext must be used within an AddressProvider")
  }
  return context
}

const AddressProvider = ({ children }: IProviderProps) => {
  const { token } = useAuth()

  const updateAddress = async (id: string, data: IUpdateAddressData) => {
    await api
      .patch(`/addresses/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AddressContext.Provider value={{ updateAddress }}>
      {children}
    </AddressContext.Provider>
  )
}

export { AddressProvider, useAddress }
