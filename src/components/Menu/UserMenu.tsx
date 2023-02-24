import { Avatar, Box, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react"

import { CustomMenuItem } from "./CustomMenuItem"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

interface IUserMenuProps {
  name: string
  isSeller: boolean
}

export const UserMenu = ({ name, isSeller }: IUserMenuProps) => {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleEditProfile = () => {}
  const handleEditAddress = () => {}
  const handleSeeAds = () => {}
  const handleLogOut = () => {
    signOut()
    navigate("/")
  }

  return (
    <Menu>
      <MenuButton p={["32px 16px", "32px 16px", "0", "0"]}>
        <Box
          display='flex'
          gap='6'
          alignItems='center'
          w='max-content'
          pl={['0', '0', '30px', '30px']}
        >
          <Avatar name={name} size='sm' />
          <Text
            color='grey.2'
            fontSize='xs'
            textAlign='left'
            fontWeight='500'
            fontFamily='body'
          >
            {name}
          </Text>
        </Box>
      </MenuButton>
      <MenuList>
        <CustomMenuItem
          functionOnClick={handleEditProfile}
          content='Editar Perfil'
        />
        <CustomMenuItem
          functionOnClick={handleEditAddress}
          content='Editar Endereço'
        />
        {isSeller && (
          <CustomMenuItem
            functionOnClick={handleSeeAds}
            content='Meus Anúncios'
          />
        )}
        <CustomMenuItem functionOnClick={handleLogOut} content='Sair' />
      </MenuList>
    </Menu>
  )
}
