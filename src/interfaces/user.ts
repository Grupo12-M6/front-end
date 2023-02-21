import { IAddress } from "./address"

export interface IUser {
  id: string
  name: string
  email: string
  cpf: string
  phone_number: string
  birthday: Date
  description: string
  is_seller: boolean
  address: IAddress
}
