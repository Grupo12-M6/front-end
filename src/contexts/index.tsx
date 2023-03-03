import { IProviderProps } from "../interfaces/user"
import { AdProvider } from "./AdContext"
import { AddressProvider } from "./AddressContext"
import { AuthProvider } from "./AuthContext"
import { UserProvider } from "./UserContext"

export const AppProvider = ({ children }: IProviderProps) => {
  return (
    <AuthProvider>
      <UserProvider>
        <AddressProvider>
          <AdProvider> {children}</AdProvider>
        </AddressProvider>
      </UserProvider>
    </AuthProvider>
  )
}
