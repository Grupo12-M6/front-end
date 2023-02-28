import { useNavigate } from "react-router-dom"
import { Button, Flex, VStack } from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types"

import { Input } from "./input"
import { useAuth } from "../../contexts/AuthContext"
import { signInSchema } from "../../validators"
import { ISignInData } from "../../interfaces/user"

export const LoginForm = () => {
  const navigate = useNavigate()

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
      .then((res) => {
        console.log(res)
        navigate(0)
      })
      .catch((err) => {
        console.log(err)
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
