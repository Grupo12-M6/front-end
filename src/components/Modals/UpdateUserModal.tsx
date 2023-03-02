import { Heading, VStack } from "@chakra-ui/react"

import { UpdateUserForm } from "../Form/UpdateUserForm"
import { ModalBasic } from "./baseModal"

interface IModalProps {
  isOpen: boolean
  onClose: () => void
}

export const UpdateUserModal = ({
  isOpen,
  onClose,
}: IModalProps) => {
  

  return (
    <ModalBasic isOpen={isOpen} onClose={onClose}>
      <VStack
        p={["20px 5px", "20px 5px", "30px 15px", "30px 15px"]}
        alignItems='flex-start'
        justifyContent='space-between'
      >
        <Heading fontFamily='Lexend' fontSize='md' color='black'>
          Editar perfil
        </Heading>
        <UpdateUserForm onCloseForm={onClose}/>
      </VStack>

    </ModalBasic>
  )
}
