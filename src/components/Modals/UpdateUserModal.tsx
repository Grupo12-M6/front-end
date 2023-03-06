import {
  Button,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"

import { useAuth } from "../../contexts/AuthContext"
import { useUser } from "../../contexts/UserContext"

import { UpdateUserForm } from "../Form/UpdateUserForm"
import { ModalBasic } from "./baseModal"
import { Dialog } from "../Dialog"
import { useNavigate } from "react-router-dom"

interface IModalProps {
  isOpen: boolean
  onClose: () => void
}

export const UpdateUserModal = ({ isOpen, onClose }: IModalProps) => {
  const { deleteUser } = useUser()
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  const {
    isOpen: isExcludeMOpen,
    onOpen,
    onClose: onExcludeMClose,
  } = useDisclosure()

  const handleDeleteUser = (id: string) => {
    deleteUser(id)
    signOut()
    navigate("/")
  }

  return (
    <>
      <Dialog
        title='Excluir usuário'
        isOpen={isExcludeMOpen}
        onClose={onExcludeMClose}
      >
        <VStack
          gap='4'
          alignItems={["center", "center", "flex-start", "flex-start"]}
        >
          <Text
            fontFamily='Lexend'
            fontSize='xs'
            fontWeight='500'
            color='black'
          >
            Tem certeza que deseja excluir o seu usuário?
          </Text>
          <Text fontSize='xs' fontWeight='400' color='grey.2' lineHeight='28px'>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente essa
            conta e removerá seus dados de nossos servidores.
          </Text>

          <HStack
            gap='2'
            alignSelf={["center", "center", "flex-end", "flex-end"]}
          >
            <Button onClick={() => onExcludeMClose()} variant='negative'>
              Cancelar
            </Button>
            <Button onClick={() => handleDeleteUser(user.id)} variant='alert'>
              Sim, excluir conta
            </Button>
          </HStack>
        </VStack>
      </Dialog>

      <ModalBasic isOpen={isOpen} onClose={onClose}>
        <VStack
          p={["20px 5px", "20px 5px", "20px 10px", "20px 10px"]}
          alignItems='flex-start'
          justifyContent='space-between'
        >
          <Heading fontFamily='Lexend' fontSize='sm' color='black'>
            Editar perfil
          </Heading>
          <UpdateUserForm onOpenDialog={onOpen} onCloseForm={onClose} />
        </VStack>
      </ModalBasic>
    </>
  )
}
