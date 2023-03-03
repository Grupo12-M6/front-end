import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

import { CustomMenuItem } from "./CustomMenuItem"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { UpdateUserModal } from "../Modals/UpdateUserModal"
import { UpdateAddressModal } from "../Modals/UpdateAddressModal"

interface IUserMenuProps {
  name: string
  isSeller: boolean
}

export const UserMenu = ({ name, isSeller }: IUserMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenEditAddress,
    onOpen: onOpenEditAddress,
    onClose: onCloseEditAddress,
  } = useDisclosure()

  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const handleEditProfile = () => {
    onOpen()
  }

  const handleEditAddress = () => {
    onOpenEditAddress()
  }

  const handleSeeAds = () => {
    navigate(`/users/${user.id}`)
  }

  const handleLogOut = () => {
    signOut()
    navigate("/")
  }

  return (
    <Menu>
      <UpdateUserModal isOpen={isOpen} onClose={onClose} />
      <UpdateAddressModal
        isOpen={isOpenEditAddress}
        onClose={onCloseEditAddress}
      />
      <MenuButton p={["32px 16px", "32px 16px", "0", "0"]}>
        <Box
          display='flex'
          gap='6'
          alignItems='center'
          w='max-content'
          pl={["0", "0", "30px", "30px"]}
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
