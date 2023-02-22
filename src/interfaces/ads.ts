import { IImage } from "./images"
import { IUser } from "./user"

export interface IAd {
  id: string
  title: string
  adType: string
  description: string
  mileage: number
  year: number
  price: number
  motorType: string
  isActive: boolean
  user: IUser
  images: IImage[]
}