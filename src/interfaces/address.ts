import { ReactNode } from "react"

export interface IAddress {
  id: string
  cep: string
  state: string
  city: string
  street: string
  number: number
  complement?: string
}

export type IAddressCreate = Omit<IAddress, 'id'>

export interface IProviderProps {
  children: ReactNode
}

export interface IUpdateAddressData {
  cep?: string
  estado?: string
  cidade?: string
  rua?: string
  numero?: number
  complement?: string 
}

export interface IAddressContextData {
  updateAddress: (id: string, data: IUpdateAddressData) => Promise<void>
}
