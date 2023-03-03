import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types"
import { useNavigate } from "react-router-dom"

import { Input } from "./input"
import { updateAddressSchema } from "../../validators"
import { IUpdateAddressData } from "../../interfaces/address"
import { useAuth } from "../../contexts/AuthContext"
import { useAddress } from "../../contexts/AddressContext"

interface IUpdateAddressFormProps {
  onCloseForm: () => void
}

export const UpdateAddressForm = ({ onCloseForm }: IUpdateAddressFormProps) => {
  const { user, signOut } = useAuth()
  const { updateAddress } = useAddress()

  const navigate = useNavigate()

  const { cep, city, id, number, state, street, complement } = user.address

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(updateAddressSchema),
  })

  const handleUpdate = (data: IUpdateAddressData) => {
    const info = {
      cep: data.cep || cep,
      state: data.state || state,
      city: data.city || city,
      street: data.street || street,
      number: data.number || number,
      complement: data.complement || complement,
    }

    updateAddress(id, info)
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
        Informações de endereço
      </Text>

      <VStack gap='4'>
        <Input
          label='CEP'
          defaultValue={cep}
          error={errors.cep}
          {...register("cep")}
        />

        <HStack>
          <Input
            label='Estado'
            defaultValue={state}
            error={errors.state}
            {...register("state")}
          />

          <Input
            label='Cidade'
            defaultValue={city}
            error={errors.city}
            {...register("city")}
          />
        </HStack>

        <Input
          label='Rua'
          defaultValue={street}
          error={errors.street}
          {...register("street")}
        />

        <HStack>
          <Input
            label='Número'
            type='number'
            defaultValue={number}
            error={errors.number}
            {...register("number")}
          />
          <Input
            label='Complemento'
            defaultValue={complement}
            error={errors.complement}
            {...register("complement")}
          />
        </HStack>
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
