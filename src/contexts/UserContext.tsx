import { createContext, useContext } from "react"

import { api } from "../services/api"
import { useAuth } from "./AuthContext"
import {
  IProviderProps,
  IRegisterData,
  IUpdateUserData,
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
    <UserContext.Provider value={{ register, updateUser }}>{children}</UserContext.Provider>
  )
}

export { UserProvider, useUser }
