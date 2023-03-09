import { useNavigate } from "react-router-dom"
import { Button, Flex, useToast, VStack } from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types"

import { Input } from "./input"
import { useAuth } from "../../contexts/AuthContext"
import { signInSchema } from "../../validators"
import { ISignInData } from "../../interfaces/user"

interface IModalProps {
  onClose: () => void
}

export const LoginForm = ({onClose}: IModalProps) => {
  const navigate = useNavigate()
  const toast = useToast()

  const { signIn } = useAuth()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  })

  const handleSignIn = (data: ISignInData) => {
    signIn(data)
      .then((res: any) => {
        toast({
          title: 'Login realizado com sucesso',
          // description: "Email ou senha inválido",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          containerStyle: {
            marginTop: "83px",
            marginRight: "20px",
          }
        })
        // console.log(res.data.message)
        // navigate(0)
        onClose()
      })
      .catch((err: any) => {
        if(err?.response.data.message == "Wrong email/password"){
          toast({
            title: 'Erro ao efetuar o login.',
            description: "Email ou senha inválido",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
            containerStyle: {
              marginTop: "83px",
              marginRight: "20px",
            }
          })
        }
        if(err?.response.data.message == "User not activate!"){
          toast({
            title: 'Erro ao efetuar o login.',
            description: "Email não ativo",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
            containerStyle: {
              marginTop: "83px",
              marginRight: "20px",
            }
          })
        }
        if(err?.response.data.message == "Account not found"){
          toast({
            title: 'Erro ao efetuar o login.',
            description: "Usuário não encontrado",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
            containerStyle: {
              marginTop: "83px",
              marginRight: "20px",
            }
          })
        }
        console.log(err.response.data.message)
      })
  }

  const handleForgetPassword = () => {}

  return (
    <Flex
      as='form'
      w='100%'
      h='60%'
      flexDirection='column'
      justifyContent='space-between'
      onSubmit={handleSubmit(handleSignIn as SubmitHandler<FieldValues>)}
    >
      <Input
        placeholder='Digitar email'
        label='Email'
        error={errors.email}
        {...register("email")}
      />
      <VStack alignItems='flex-end'>
        <Input
          placeholder='Digitar senha'
          label='Senha'
          type='password'
          error={errors.password}
          {...register("password")}
        />
        <Button
          onClick={() => handleForgetPassword}
          p='0'
          bgColor='transparent'
          fontSize='0.875rem'
          color='grey.2'
          _hover={{ bgColor: "transparent", color: "brand.1" }}
        >
          Esqueci minha senha
        </Button>
      </VStack>
      <Button type='submit' variant='brand1'>
        Entrar
      </Button>
    </Flex>
  )
}
