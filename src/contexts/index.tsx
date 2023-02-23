import { IProviderProps } from "../interfaces/user"
import { AuthProvider } from "./AuthContext"

export const AppProvider = ({ children }: IProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>
}
