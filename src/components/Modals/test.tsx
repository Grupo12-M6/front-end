import {
  Flex,
  Heading,
  Button,
  Text,
  VStack,
  Textarea,
  useRadioGroup,
} from "@chakra-ui/react"

import { Input } from "../Form/input"

import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form"
import { ModalBasic } from "./baseModal"
import { RadioCard } from "../Form/radio"
import { IPropsModal, IUpdate } from "../../interfaces/ads"

export const ModalUpdateAds = ({ onClose, isOpen }: IPropsModal) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  // SETTINGS ADD INPUTS IMAGES
  const { fields, append } = useFieldArray({
    control,
    name: "images",
  })

  const ImageAdd = () => {
    append({
      url: "",
    })
  }

  const handleUpdate = (data: IUpdate) => {
    if (data.adType == null) {
      data.adType = "Leilão"
    }
    if (data.motorType == null) {
      data.motorType = "Moto"
    }
    console.log(data)
  }

  // SETTINGS INPUTS RADIOS
  const options_1 = ["Venda", "Leilão"]
  const options_2 = ["Carro", "Moto"]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "adType",
    defaultValue: "venda",
  })

  const { getRootProps: getRootProps_2, getRadioProps: getRadioProps_2 } =
    useRadioGroup({
      name: "motorType",
      defaultValue: "carro",
    })

  const group = getRootProps()
  const group_2 = getRootProps_2()

  return (
    <ModalBasic isOpen={isOpen} onClose={onClose}>
      <VStack
        p='30px 15px'
        alignItems='flex-start'
        h='100%'
        justifyContent='space-between'
      >
        <Heading fontFamily='Lexend' fontSize='md' color='black'>
          {" "}
          Editar anúncio{" "}
        </Heading>
        <Flex
          as='form'
          w='100%'
          flexDirection='column'
          justifyContent='space-between'
          onSubmit={handleSubmit(handleUpdate as SubmitHandler<FieldValues>)}
        >
          <Text
            fontSize='14px'
            fontWeight='500'
            fontFamily='inter'
            marginTop='18px'
            color='#000000'
          >
            Tipo de anúncio
          </Text>
          <Flex
            w='100%'
            gap='2%'
            marginTop='8px'
            flexDirection='row'
            justifyContent='space-around'
            {...group}
            {...register("adType")}
          >
            {options_1.map((value) => {
              const radio = getRadioProps({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </Flex>

          <Text
            fontSize='14px'
            fontWeight='500'
            fontFamily='inter'
            color='#000000'
            marginTop='24px'
            marginBottom='24px'
          >
            Informações do veículo
          </Text>
          <Input
            placeholder='Digitar titulo'
            label='Titulo'
            error={errors.title}
            {...register("title")}
          />
          <Flex
            w='100%'
            h='20%'
            gap='2%'
            marginTop='28px'
            flexDirection='row'
            justifyContent='space-around'
          >
            <Input
              type='number'
              placeholder='Digitar ano'
              label='Ano'
              error={errors.year}
              {...register("year")}
            />

            <Input
              type='number'
              placeholder='0'
              label='Quilometragem'
              error={errors.mileage}
              {...register("mileage")}
            />

            <Input
              type='number'
              placeholder='Digitar preço'
              label='Preço'
              error={errors.price}
              {...register("price")}
            />
          </Flex>

          <Flex
            w='100%'
            gap='5px'
            marginTop='28px'
            flexDirection='column'
            justifyContent='flex-start'
          >
            <Text
              fontSize='14px'
              fontWeight='500'
              fontFamily='inter'
              color='grey.1'
            >
              Descrição:
            </Text>
            <Textarea
              fontSize='16px'
              placeholder='Digitar Descrição'
              // error={errors.email}
              {...register("description")}
            />
          </Flex>

          <Text
            fontSize='14px'
            fontWeight='500'
            fontFamily='inter'
            color='#000000'
            marginTop='28px'
          >
            Tipo de veículo
          </Text>
          <Flex
            w='100%'
            h='30%'
            marginTop='9px'
            marginBottom='28px'
            gap='2%'
            flexDirection='row'
            justifyContent='space-around'
            {...group_2}
            {...register("motorType")}
          >
            {options_2.map((value) => {
              const radio = getRadioProps_2({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </Flex>

          <Input
            key={0}
            placeholder='Inserir URL da imagem'
            label='Imagem da capa'
            marginBottom='28px'
            error={errors.url}
            {...register(`images.${0}.url`)}
          />
          {fields.map((proc, index) => {
            if (index >= 1) {
              return (
                <Input
                  key={index}
                  placeholder='Inserir URL da imagem'
                  label={`${index}° Imagem da galeria`}
                  marginBottom='28px'
                  error={errors.url}
                  {...register(`images.${index}.url`)}
                />
              )
            }
          })}

          <Button
            bg='#EDEAFD'
            fontSize='14px'
            color='#4529E6'
            width='85%'
            onClick={() => ImageAdd()}
          >
            Adicionar campo para imagem da galeria
          </Button>
          <Flex
            w='100%'
            h='30%'
            marginTop='28px'
            gap='2%'
            flexDirection='row'
            justifyContent='flex-end'
          >
            <Button
              bg='#DEE2E6'
              fontSize='16px'
              color='#495057'
              width='55%'
              marginTop='28px'
              onClick={() => onClose()}
            >
              Excluir anúncio
            </Button>
            <Button
              type='submit'
              bg='brand.1'
              fontSize='16px'
              color='#FFFFFF'
              _hover={{ bgColor: "brand.3", color: "#EDEAFD", border: "none" }}
              _focus={{ bgColor: "brand.3", color: "#EDEAFD", border: "none" }}
              width='45%'
              marginTop='28px'
            >
              Salvar alterações
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </ModalBasic>
  )
}
