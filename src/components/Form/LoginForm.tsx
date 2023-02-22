import { useNavigate } from "react-router-dom"
import { Button, FormControl } from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types"

import { useAuth } from "../../contexts/AuthContext"
import { signInSchema } from "../../validators"
import { Input } from "./input"

interface ISignInData {
  email: string
  password: string
}

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
      .then(() => {
        navigate(0)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleForgetPassword = () => {

  }

  return (
    <FormControl onSubmit={handleSubmit(handleSignIn as SubmitHandler<FieldValues>)}>
      <Input
        placeholder='Digitar email'
        label='Email'
        error={errors.email}
        {...register("email")}
      />
      <Input
        placeholder='Digitar senha'
        label='Senha'
        type='password'
        error={errors.password}
        {...register("password")}
      />
      <Button onClick={() => handleForgetPassword}> Esqueci minha senha </Button>
      <Button type='submit'> Entrar </Button>

    </FormControl>
  )
}
