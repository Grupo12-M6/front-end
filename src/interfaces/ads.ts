import { ReactNode } from "react"
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
  isDelete: boolean
  user: IUser
  images: IImage[]
}

export interface IProviderProps {
  children: ReactNode
}

export interface IAdContextData {
  ads: IAd[]
  imgs: IListImage[]
  adsByUser: IAd[]
  adsInfo: IAd
  listAds: () => Promise<void>
  listAdsByUser: (userId: string) => Promise<void>
  deleteAd: (adId: string) => Promise<void>
  registerAds: ({...data}: IRegister) => Promise<void>
  listOneAds: (adId: string) => Promise<void>
  updateAds: (adsId: string, {...data}: IUpdate) => Promise<void>
}

export interface IRegister {
  title: string;
  adType: string;
  year: number;
  description: string;
  mileage: number;
  motorType: string;
  price: number;
  isActive: boolean;
  images: IListImage[];
}

export interface IPropsModal {
  onClose: any;
  isOpen: any;
}

export interface IPropsModalUpdate {
  id: string
  onClose: any;
  isOpen: any;
}

export interface IListImage {
  url: string;
}

export interface IUpdate {
  title?: string;
  adType?: string;
  year?: number;
  description?: string;
  mileage?: number;
  motorType?: string;
  price?: number;
  isActive?: boolean;
  images?: IListImage[];
}
