import { Component } from "react"
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react"

import { CustomMenuItem } from "./CustomMenuItem"

interface IUserMenuProps {
  Icon: Component
  name: string
}

export const UserMenu = ({ Icon, name }: IUserMenuProps) => {
  function handleEditProfile() {}
  function handleEditAddress() {}
  function handleSeeAds() {}
  function handleLogOut() {}

  return (
    <Menu>
      <MenuButton>
        <Box>
          {/* <Icon/> */}
          <Text
            color='grey.2'
            fontSize='xs'
            textAlign='left'
            fontWeight='400'
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
        <CustomMenuItem
          functionOnClick={handleSeeAds}
          content='Meus Anúncios'
        />{/* Only if the user is a seller */}
        <CustomMenuItem functionOnClick={handleLogOut} content='Sair' />
      </MenuList>
    </Menu>
  )
}
