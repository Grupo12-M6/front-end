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

export interface IRegisterData {
  name: string
  email: string
  password: string
  cpf: string
  phoneNumber: string
  birthday: string
  description: string
  isSeller: boolean
}

export interface IUserContextData {
  register: ({
    name,
    email,
    password,
    cpf,
    phoneNumber,
    birthday,
    description,
    isSeller,
  }: IRegisterData) => Promise<void>
}
