import { IUser } from "./user";

export interface IComment {
  id: string;
  content: string;
  createdAt: Date;
  ad: string;
  user: IUser[];
}
