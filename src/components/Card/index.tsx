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

import { IAd } from "../../interfaces/ads"
import { formatCurrency } from "../../utils/formatCurrency"

interface ICustomCardProps {
  ad: IAd
}

export const CustomCard = ({ ad }: ICustomCardProps) => {
  const {
    description,
    mileage,
    price,
    title,
    user,
    year,
    isActive, //images
  } = ad

  const userId = "c93f86fd-6cc1-4136-8d80-6f58a853502a"
  let isMine = false

  if (userId == user.id) {
    isMine = true
  }

  const [isOnHover, setIsOnHover] = useState(false)

  const formattedPrice = formatCurrency(price)

  const handleEdit = () => {}
  const handleSeeMore = () => {}

  return (
    <Card
      w='300px'
      h={isMine ? "380px" : "350px"}
      variant='unstyled'
      _hover={{ cursor: "pointer" }}
      onMouseOver={() => setIsOnHover(true)}
      onMouseOut={() => setIsOnHover(false)}
      bgColor='grey.8'
    >
      {!isMine && (
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
      <Box
        w='100%'
        h='150px'
        border='2px'
        borderRadius='4px'
        borderColor={isOnHover ? "brand.1" : "transparent"}
        overflow='hidden'
      >
        <Image
          // src={images[0].url}
          src='https://garagem360.com.br/wp-content/uploads/2021/08/ALTA20-1.jpeg'
          w='100%'
          h='100%'
          transform={isOnHover ? "scale(1.2)" : "scale(1)"}
          transitionDuration='500ms'
        />
      </Box>
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
            isTruncated
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
            noOfLines={2}
          >
            {description}
          </Text>
          <Text> {user.name} </Text>
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
            {formattedPrice}
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
