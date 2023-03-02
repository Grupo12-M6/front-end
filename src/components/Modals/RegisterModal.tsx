import { Heading, VStack } from "@chakra-ui/react"

import { RegisterForm } from "../Form/RegisterForm"
import { ModalBasic } from "./baseModal"

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenDialog: () => void
}

export const RegisterModal = ({
  isOpen,
  onClose,
  onOpenDialog,
}: IModalProps) => {
  

  return (
    <ModalBasic isOpen={isOpen} onClose={onClose}>
      <VStack
        p={["20px 5px", "20px 5px", "30px 15px", "30px 15px"]}
        alignItems='flex-start'
        justifyContent='space-between'
      >
        <Heading fontFamily='Lexend' fontSize='md' color='black'>
          Cadastro
        </Heading>
        <RegisterForm onOpenDialog={onOpenDialog} onCloseForm={onClose} />
      </VStack>

    </ModalBasic>
  )
}
