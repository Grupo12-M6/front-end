import { Button, Heading, Text, VStack } from "@chakra-ui/react"
import { LoginForm } from "../Form/LoginForm"
import { ModalBasic } from "./baseModal"

interface IModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: IModalProps) => {
  return (
    <ModalBasic isOpen={isOpen} onClose={onClose}>
      <VStack
        p={["20px 5px", "20px 5px", "30px 15px", "30px 15px"]}
        alignItems='flex-start'
        h='542px'
        justifyContent='space-between'
      >
        <Heading fontFamily='Lexend' fontSize='md' color='black'>
          Login
        </Heading>
        <LoginForm />
        <VStack gap='4' alignItems='center' w='100%'>
          <Text fontSize='0.875rem'>Ainda não possui conta?</Text>
          <Button
            onClick={() => {
              onClose
            }}
            w='100%'
            variant='outline2'
          >
            Cadastrar
          </Button>
        </VStack>
      </VStack>
    </ModalBasic>
  )
}
