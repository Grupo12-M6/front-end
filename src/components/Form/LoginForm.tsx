import { useNavigate } from "react-router-dom"
import { Button, FormControl, VStack } from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types"

import { useAuth } from "../../contexts/AuthContext"
import { signInSchema } from "../../validators"
import { Input } from "./input"
import { ISignInData } from "../../interfaces/user"

interface ILoginProps {
  initialRef: React.MutableRefObject<null>
}

export const LoginForm = ({ initialRef }: ILoginProps) => {
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
      .then(() => {
        console.log
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleForgetPassword = () => {}

  return (
    <FormControl
      onSubmit={handleSubmit(handleSignIn as SubmitHandler<FieldValues>)}
      h='60%'
      display='flex'
      flexDir='column'
      justifyContent='space-between'
    >
      <Input
        placeholder='Digitar email'
        label='Email'
        error={errors.email}
        {...register("email")}
        ref={initialRef}
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
          variant='linkCustom'
          fontSize='0.875rem'
          color='grey.2'
        >
          Esqueci minha senha
        </Button>
      </VStack>
      <Button type='submit' variant='brand1'>
        Entrar
      </Button>
    </FormControl>
  )
}
