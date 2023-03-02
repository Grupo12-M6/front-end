import { IAddress, IAddressCreate } from "./address"
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

export interface IRegisterForm {
  name: string
  email: string
  password: string
  cpf: string
  phoneNumber: string
  birthday: string
  description: string
  isSeller: string
  cep: string
  state: string
  city: string
  street: string
  number: number
  complement?: string
  passwordConfirmation: string
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
  address: IAddressCreate
}


export interface IUserContextData {
  register: (data: IRegisterData) => Promise<void>
}
