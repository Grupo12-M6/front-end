import { Heading, VStack } from "@chakra-ui/react"

import { UpdateAddressForm } from "../Form/UpdateAddressForm"
import { ModalBasic } from "./baseModal"

interface IModalProps {
  isOpen: boolean
  onClose: () => void
}

export const UpdateAddressModal = ({ isOpen, onClose }: IModalProps) => {
  return (
    <ModalBasic isOpen={isOpen} onClose={onClose}>
      <VStack
        p={["20px 5px", "20px 5px", "20px 10px", "20px 10px"]}
        alignItems='flex-start'
        justifyContent='space-between'
      >
        <Heading fontFamily='Lexend' fontSize='sm' color='black'>
          Editar perfil
        </Heading>
        <UpdateAddressForm onCloseForm={onClose} />
      </VStack>
    </ModalBasic>
  )
}
