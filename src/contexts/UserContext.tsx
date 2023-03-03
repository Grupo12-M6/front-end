import { createContext, useContext, useState } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
import {
  IProviderProps,
  IRegisterData,
  IUpdateUserData,
  IUser,
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
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser)

  const register = async (data: IRegisterData) => {
    await api
      .post("/users", data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const listOneUser = async (id: string) => {
    await api
      .get(`/users/${id}`)
      .then((res) => setCurrentUser(res.data.data))
      .catch((err) => {
        console.log(err)
      })
  }

  const updateUser = async (id: string, data: IUpdateUserData) => {
    await api
      .patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("@user", JSON.stringify(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <UserContext.Provider
      value={{ register, listOneUser, updateUser, currentUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, useUser }
