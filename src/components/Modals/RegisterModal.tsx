import { Button, Heading, Text, useDisclosure, VStack } from "@chakra-ui/react"

import { RegisterForm } from "../Form/RegisterForm"
import { ModalBasic } from "./baseModal"
import { Dialog } from "../Dialog"

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenLogin: () => void
}

export const RegisterModal = ({
  isOpen,
  onClose,
  onOpenLogin,
}: IModalProps) => {
  const {
    isOpen: isMSucessOpen,
    onOpen,
    onClose: onMSucessClose,
  } = useDisclosure()

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
        <RegisterForm onOpenDialog={onOpen} onCloseForm={onClose} />
      </VStack>

      <Dialog title='Sucesso!' isOpen={isMSucessOpen} onClose={onMSucessClose}>
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
            Sua conta foi criada com sucesso!
          </Text>
          <Text fontSize='xs' fontWeight='400' color='grey.2' lineHeight='28px'>
            Agora você poderá ver seus negócios crescendo em grande escala
          </Text>
          <Button
            variant='brand1'
            onClick={() => {
              onMSucessClose()
              onOpenLogin()
            }}
          >
            Ir para o login
          </Button>
        </VStack>
      </Dialog>
    </ModalBasic>
  )
}
