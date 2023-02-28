import { IProviderProps } from "../interfaces/user"
import { AdProvider } from "./AdContext"
import { AuthProvider } from "./AuthContext"
import { UserProvider } from "./UserContext"

export const AppProvider = ({ children }: IProviderProps) => {
  return (
    <AuthProvider>
      <UserProvider>
        <AdProvider> {children}</AdProvider>
      </UserProvider>
    </AuthProvider>
  )
}
