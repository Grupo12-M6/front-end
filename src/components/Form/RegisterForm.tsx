import { useNavigate } from "react-router-dom"
import {
  Button,
  Flex,
  HStack,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types"

import { Input } from "./input"
import { RadioCard } from "./radio"
import { IRegisterForm } from "../../interfaces/user"
import { registerSchema } from "../../validators"
import { useUser } from "../../contexts/UserContext"

export const RegisterForm = () => {
  const navigate = useNavigate()
  const { register: registerUser } = useUser()

  const radioOptions = ["Comprador", "Anunciante"]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "isSeller",
    defaultValue: "Comprador",
  })
  const group = getRootProps()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const handleRegister = (data: IRegisterForm) => {
    const info = {
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      phoneNumber: data.phoneNumber,
      birthday: data.birthday,
      description: data.description,
      isSeller: data.isSeller == "Anunciante" ? true : false,
      cep: data.cep,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement || undefined,
    }
    registerUser(info)
  }

  return (
    <Flex
      as='form'
      w='100%'
      h='60%'
      flexDirection='column'
      justifyContent='space-between'
      onSubmit={handleSubmit(handleRegister as SubmitHandler<FieldValues>)}
    >
      <Text py='6' fontSize='0.875rem' fontWeight='500' color='black'>
        Informações pessoais
      </Text>

      <VStack gap='4'>
        <Input
          placeholder='Ex: Samuel Leão'
          label='Nome'
          error={errors.name}
          {...register("name")}
        />

        <Input
          placeholder='Ex: samuel@kenzie.com.br'
          label='Email'
          type='email'
          error={errors.email}
          {...register("email")}
        />

        <Input
          placeholder='000.000.000-00'
          label='CPF'
          error={errors.cpf}
          {...register("cpf")}
        />

        <Input
          placeholder='(DDD) 90000-0000'
          label='Celular'
          type='tel'
          error={errors.phoneNumber}
          {...register("phoneNumber")}
        />

        <Input
          placeholder='00/00/00'
          label='Data de nascimento'
          type='date'
          error={errors.birthday}
          {...register("birthday")}
        />

        <Input
          placeholder='Digitar descrição'
          label='Descrição'
          error={errors.description}
          {...register("description")}
        />
      </VStack>

      <Text py='6' fontSize='0.875rem' fontWeight='500' color='black'>
        Informações de endereço
      </Text>

      <VStack gap='4'>
        <Input
          placeholder='00000.000'
          label='CEP'
          error={errors.cep}
          {...register("cep")}
        />

        <HStack>
          <Input
            placeholder='Digitar Estado'
            label='Estado'
            error={errors.state}
            {...register("state")}
          />
          <Input
            placeholder='Digitar cidade'
            label='Cidade'
            error={errors.city}
            {...register("city")}
          />
        </HStack>

        <Input
          placeholder='Digitar rua'
          label='Rua'
          error={errors.street}
          {...register("street")}
        />

        <HStack>
          <Input
            placeholder='Digitar número'
            label='Número'
            error={errors.number}
            {...register("number")}
          />
          <Input
            placeholder='Ex: apart 307'
            label='Complemento'
            error={errors.complement}
            {...register("complement")}
          />
        </HStack>
      <Text alignSelf='flex-start' fontSize='0.875rem' fontWeight='500' color='black'> Tipo de conta </Text>

      <Flex
        w='100%'
        gap={['2', '0', '0', '0']}
        marginTop='8px'
        flexDirection={['column', 'row', 'row', 'row']}
        justifyContent='space-between'
        {...group}
        {...register("isSeller")}
      >
        {radioOptions.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard px={['50px', '50px', '45px', '45px']} py='10.5px' key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </Flex>

      <Input
        placeholder='Digitar senha'
        label='Senha'
        type='password'
        error={errors.password}
        {...register("password")}
      />

      <Input
        placeholder='Digitar senha'
        label='Confirmar senha'
        type='password'
        error={errors.passwordConfirmation}
        {...register("passwordConfirmation")}
      />

      <Button w='100%' h='48px' type='submit' variant='brand1'>
        Finalizar cadastro
      </Button>
      </VStack>
      
    </Flex>
  )
}
