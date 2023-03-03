import { Button, Flex, HStack, Text, Textarea, VStack } from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types"

import { Input } from "./input"
import { IUpdateUserForm } from "../../interfaces/user"
import { updateUserSchema } from "../../validators"
import { useUser } from "../../contexts/UserContext"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

interface IUpdateUserFormProps {
  onCloseForm: () => void
}

export const UpdateUserForm = ({ onCloseForm }: IUpdateUserFormProps) => {
  const { user, signOut } = useAuth()
  const { updateUser } = useUser()

  const navigate = useNavigate()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(updateUserSchema),
  })

  const handleUpdate = (data: IUpdateUserForm) => {
    const isSeller = () => {
      if (data.isSeller) {
        if (data.isSeller == "Anunciante") {
          return true
        }
        return false
      }
    }

    const info = {
      name: data.name || user.name,
      email: data.email || user.email,
      cpf: data.cpf || user.cpf,
      phoneNumber: data.phoneNumber || user.phoneNumber,
      birthday: data.birthday || user.birthday,
      description: data.description || user.description,
      isSeller: isSeller() || user.isSeller,
    }

    updateUser(user.id, info)
      .then((res) => {
        onCloseForm()
        signOut()
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Flex
      as='form'
      w='100%'
      h='60%'
      flexDirection='column'
      justifyContent='space-between'
      onSubmit={handleSubmit(handleUpdate as SubmitHandler<FieldValues>)}
    >
      <Text py='6' fontSize='0.875rem' fontWeight='500' color='black'>
        Informações pessoais
      </Text>

      <VStack gap='4'>
        <Input
          placeholder='Ex: Samuel Leão'
          label='Nome'
          defaultValue={user.name}
          error={errors.name}
          {...register("name")}
        />

        <Input
          placeholder='Ex: samuel@kenzie.com.br'
          label='Email'
          type='email'
          defaultValue={user.email}
          error={errors.email}
          {...register("email")}
        />

        <Input
          placeholder='000.000.000-00'
          label='CPF'
          defaultValue={user.cpf}
          error={errors.cpf}
          {...register("cpf")}
        />

        <Input
          placeholder='(DDD) 90000-0000'
          label='Celular'
          type='tel'
          defaultValue={user.phoneNumber}
          error={errors.phoneNumber}
          {...register("phoneNumber")}
        />

        <Input
          placeholder='00/00/00'
          label='Data de nascimento'
          type='date'
          defaultValue={user.birthday.toString()}
          error={errors.birthday}
          {...register("birthday")}
        />

        <VStack w='100%'>
          <Text
            w='100%'
            color='grey.1'
            fontSize='14px'
            fontWeight={500}
            fontFamily='inter'
            mb='0'
            textAlign='left'
          >
            Descrição
          </Text>

          <Textarea
            id='description'
            variant='outline'
            placeholder='Digitar descrição'
            _hover={{ bgColor: "grey.8" }}
            _placeholder={{ color: "grey.3" }}
            _focus={{ bg: "grey.9" }}
            borderRadius='4px'
            fontSize='16px'
            size='lg'
            h='48px'
            w='100%'
            color='black'
            borderColor='black'
            {...register("description")}
          />
        </VStack>
      </VStack>

      <HStack
        gap='2'
        paddingTop='6'
        alignSelf={["center", "flex-end", "flex-end", "flex-end"]}
      >
        <Button onClick={() => onCloseForm()} h='48px' variant='negative'>
          Cancelar
        </Button>
        <Button h='48px' type='submit' variant='brand1'>
          Salvar alterações
        </Button>
      </HStack>
    </Flex>
  )
}
