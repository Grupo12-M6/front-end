import { IImage } from "./images"
import { IUser } from "./user"

export interface IAd {
  id: string
  title: string
  ad_type: string
  description: string
  mileage: number
  year: number
  price: number
  motor_type: string
  is_active: boolean
  user: IUser
  images: IImage[]
}
