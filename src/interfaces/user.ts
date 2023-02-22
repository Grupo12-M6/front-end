import { IAddress } from "./address"

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
}
