import {
  Flex,
  Heading,
  Button,
  Text,
  VStack,
  Textarea,
  useRadioGroup,
  useDisclosure,
  HStack,
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
import { IAd, IPropsModalUpdate, IUpdate } from "../../interfaces/ads"
import { Dialog } from "../Dialog"
import { useAd } from "../../contexts/AdContext"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useUser } from "../../contexts/UserContext"


export const ModalUpdateAds = ({ id, onClose, isOpen }: IPropsModalUpdate) => {
  
  const { deleteAd, listAdsByUser, updateAds, update, setUpdate } = useAd()
  const { listOneUser } = useUser()
  const { user } = useAuth()

  const [adsInfo, setAdsInfo] = useState<IAd>({} as IAd)
  const navigate = useNavigate()

  const {
    isOpen: isExcludeMOpen,
    onOpen,
    onClose: onExcludeMClose,
  } = useDisclosure()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const { fields, append } = useFieldArray({
    control,
    name: "images",
  })

  const ImageAdd = () => {
    append({
      url: ""
    })
  }

  const loadData = async (idAd: string) => {
    await api
      .get(`/ads/${idAd}`)
      .then((data) => {
        setAdsInfo(data.data)
        // setImgs(data.data.images)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    loadData(id)
    listAdsByUser(user?.id!)
    listOneUser(user?.id!)
  }, [update])

  const handleUpdate = (data: IUpdate) => {
    if (data.adType == null) {
      data.adType = "Leilão"
    }
    if (data.motorType == null) {
      data.motorType = "Moto"
    }

    let arrImage: any = []
    data.images?.map((image) => {
      if(image.url !== "") {
        arrImage.push(image)
      }
    })
    data.images = arrImage

    const updateAd = {
      title: data.title || adsInfo.title,
      adType: data.adType || adsInfo.adType,
      year: data.year || adsInfo.year,
      mileage: data.mileage || adsInfo.mileage,
      price: data.price || adsInfo.price,
      description: data.description || adsInfo.description,
      motorType: data.motorType || adsInfo.motorType,
      images: data.images || adsInfo.images
    }

    console.log(data)

    updateAds(id, {...updateAd})
    
    setUpdate(update + 1)

    listAdsByUser(user.id!)
    listOneUser(user.id!)

    onClose()
  }

  const handleDelete = (id: string) => {
    deleteAd(id)

    setUpdate(update + 1)

    listAdsByUser(user.id!)
    listOneUser(user.id!)

    onExcludeMClose()
  }

  const options_1 = ["Venda", "Leilão"]
  const options_2 = ["Carro", "Moto"]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "adType",
    defaultValue: adsInfo.adType,
  })

  const { getRootProps: getRootProps_2, getRadioProps: getRadioProps_2 } =
    useRadioGroup({
      name: "motorType",
      defaultValue: adsInfo.motorType,
    })

  const group = getRootProps()
  const group_2 = getRootProps_2()

  return (
    <>
      <Dialog
        title='Excluir anúncio'
        isOpen={isExcludeMOpen}
        onClose={onExcludeMClose}
      >
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
            Tem certeza que deseja remover este anúncio?
          </Text>
          <Text fontSize='xs' fontWeight='400' color='grey.2' lineHeight='28px'>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente esse anúncio e removerá seus dados de nossos servidores.
          </Text>

          <HStack
            gap='2'
            alignSelf={["center", "center", "flex-end", "flex-end"]}
          >
            <Button onClick={() => onExcludeMClose()} variant='negative'>
              Cancelar
            </Button>
            <Button onClick={() => handleDelete(id)} variant='alert'>
              Sim, excluir anúncio
            </Button>
          </HStack>
        </VStack>
      </Dialog>

      <ModalBasic isOpen={isOpen} onClose={onClose}>
        <VStack
          p='30px 15px'
          alignItems='flex-start'
          h='100%'
          justifyContent='space-between'
        >
          <Heading fontFamily='Lexend' fontSize='md' color='black'>
            Editar anúncio
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
              defaultValue={adsInfo.title}
              // error={errors.title}
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
                defaultValue={adsInfo.year}
                // error={errors.year}
                {...register("year")}
              />

              <Input
                type='number'
                placeholder='0'
                label='Quilometragem'
                defaultValue={adsInfo.mileage}
                // error={errors.mileage}
                {...register("mileage")}
              />

              <Input
                type='number'
                placeholder='Digitar preço'
                label='Preço'
                defaultValue={adsInfo.price}
                // error={errors.price}
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
                defaultValue={adsInfo.description}
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
                onClick={() => {
                  onClose(), onOpen()
                }}
              >
                Excluir anúncio
              </Button>
              <Button
                type='submit'
                bg='brand.1'
                fontSize='16px'
                color='#FFFFFF'
                _hover={{
                  bgColor: "brand.3",
                  color: "#EDEAFD",
                  border: "none",
                }}
                _focus={{
                  bgColor: "brand.3",
                  color: "#EDEAFD",
                  border: "none",
                }}
                width='45%'
                marginTop='28px'
              >
                Salvar alterações
              </Button>
            </Flex>
          </Flex>
        </VStack>
      </ModalBasic>
    </>
  )
}
