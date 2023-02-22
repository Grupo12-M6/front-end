import { IAddress } from "./address"
import { ReactNode } from "react"

export interface IUser {
  id: string
  name: string
  email: string
  cpf: string
  phoneNumber: string
  birthday: Date
  description: string
  isSeller: boolean
  address: IAddress
  createdAt: Date
  updatedAt: Date
}

export interface ISignInData {
  email: string
  password: string
}

export interface IAuthState {
  user: IUser
  token: string
}

export interface IProviderProps {
  children: ReactNode
}

export interface IAuthContextData {
  user: IUser
  token: string
  signIn: (credentials: ISignInData) => Promise<void>
  signOut: () => void
}