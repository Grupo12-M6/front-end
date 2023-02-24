import { IProviderProps } from "../interfaces/user"
import { AdProvider } from "./AdContext"
import { AuthProvider } from "./AuthContext"

export const AppProvider = ({ children }: IProviderProps) => {
  return (
    <AuthProvider>
      <AdProvider> {children}</AdProvider>
    </AuthProvider>
  )
}
