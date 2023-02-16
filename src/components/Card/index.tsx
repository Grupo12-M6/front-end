import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"

interface IAdProps {
  image: string
  title: string
  description: string
  userName: string
  mileage: number
  year: number
  price: number
}

interface ICustomCardProps {
  ad: IAdProps
  isActive?: boolean
  isMine?: boolean
}

export const CustomCard = ({ ad, isActive, isMine }: ICustomCardProps) => {
  const { image, description, mileage, price, title, userName, year } = ad
  const [isOnHover, setIsOnHover] = useState(false)

  const formattedPrice = () => {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  function handleEdit() {}
  function handleSeeMore() {}

  return (
    <Card
      w='312px'
      h={isMine ? "380px" : "350px"}
      variant='unstyled'
      onMouseOver={() => setIsOnHover(true)}
      onMouseOut={() => setIsOnHover(false)}
    >
      {isActive !== undefined && (
        <Box
          p='2'
          m='2'
          borderRadius='2px'
          color='white'
          fontSize='0.875rem'
          bg={isActive ? "brand.1" : "grey.4"}
          position='absolute'
        >
          {isActive ? "Active" : "Inactive"}
        </Box>
      )}
      <Image
        src={image}
        w='100%'
        h='150px'
        border='2px'
        borderRadius='4px'
        borderColor={isOnHover ? "brand.1" : "transparent"}
      />
      <CardBody
        p='2'
        display='flex'
        flexDir='column'
        justifyContent='space-between'
      >
        <Stack spacing='3' w='100%'>
          <Heading
            textAlign='left'
            color='grey.1'
            fontSize='sm'
            fontWeight='600'
            fontFamily='heading'
            overflow='hidden'
          >
            {title}
          </Heading>
          <Text
            maxW='100%'
            maxH='32px'
            lineHeight='16px'
            textAlign='left'
            fontSize='0.875rem'
            fontWeight='400'
            fontFamily='body'
            overflow='hidden'
            textOverflow='ellipsis'
          >
            {description}
          </Text>
          <Text> {userName} </Text>
        </Stack>
        <Box
          p='0'
          mt='4'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <HStack spacing='2'>
            <Box
              h='32px'
              p='2'
              bg='brand.4'
              color='brand.1'
              fontSize='0.875rem'
              borderRadius='4px'
              display='flex'
              alignItems='center'
            >
              {`${mileage} KM`}
            </Box>
            <Box
              h='32px'
              p='2'
              bg='brand.4'
              color='brand.1'
              fontSize='0.875rem'
              borderRadius='4px'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              {year}
            </Box>
          </HStack>
          <Text as='span' color='grey.1' fontWeight='500' fontFamily='heading'>
            {formattedPrice()}
          </Text>
        </Box>
        {isMine && (
          <CardFooter p='0' paddingTop='4' gap='2'>
            <Button
              fontSize='0.875rem'
              fontWeight='600'
              variant='outline1'
              onClick={() => handleEdit()}
            >
              Editar
            </Button>
            <Button
              fontSize='0.875rem'
              fontWeight='600'
              variant='outline1'
              onClick={() => handleSeeMore()}
            >
              Ver como
            </Button>
          </CardFooter>
        )}
      </CardBody>
    </Card>
  )
}
