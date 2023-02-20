import { Component } from "react"
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react"

import { CustomMenuItem } from "./CustomMenuItem"

interface IUserMenuProps {
  name: string
}

export const UserMenu = ({ name }: IUserMenuProps) => {
  function handleEditProfile() {}
  function handleEditAddress() {}
  function handleSeeAds() {}
  function handleLogOut() {}

  return (
    <Menu>
      <MenuButton p={['32px 16px', '32px 16px', '0', '0']}>
        <Box display='flex' gap='6' alignItems='center' w='max-content'>
          <Avatar name={name} size='sm'/>
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
        <CustomMenuItem
          functionOnClick={handleSeeAds}
          content='Meus Anúncios'
        />{/* Only if the user is a seller */}
        <CustomMenuItem functionOnClick={handleLogOut} content='Sair' />
      </MenuList>
    </Menu>
  )
}
