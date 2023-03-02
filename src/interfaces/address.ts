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
