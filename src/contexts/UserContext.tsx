import { createContext, useCallback, useContext, useState } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
import {
  IProviderProps,
  IRegisterData,
  IUserContextData,
} from "../interfaces/user"

const UserContext = createContext<IUserContextData>({} as IUserContextData)

const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("UserContext must be used within an UserProvider")
  }
  return context
}

const UserProvider = ({ children }: IProviderProps) => {
  const { token } = useAuth()

  const register = async ({
    name,
    email,
    password,
    cpf,
    phoneNumber,
    birthday,
    description,
    isSeller,
  }: IRegisterData) => {
    await api
      .post("/users", {
        name,
        email,
        password,
        cpf,
        phoneNumber,
        birthday,
        description,
        isSeller,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return <UserContext.Provider value={{register}}>{children}</UserContext.Provider>
}

export { UserProvider, useUser }
