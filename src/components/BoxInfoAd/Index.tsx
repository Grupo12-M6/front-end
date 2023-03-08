import {
  Box,
  Text,
  Badge,
  HStack,
  Button,
  Link,
  VStack,
} from "@chakra-ui/react"

interface IBoxInfoAd {
  title: string
  year: string | number
  milles: string | number
  price: string | number
}

const BoxInfoAd = ({ title, year, milles, price }: IBoxInfoAd) => {
  // --- NUMERO E MENSAGEM PARA O WhatsApp
  // COLOCAR NUMERO SEM ESPAÇOS OU SÍMBOLOS, APENAS NÚMEROS
  const phoneCompany = "1130042222"
  const messageBuy = `Olá! Gostaria de comprar o produto: ${title}`

  return (
    <VStack
      backgroundColor='grey.10'
      borderRadius='4px'
      w='100%'
      p='8'
      gap='6'
      alignItems='flex-start'
    >
      <Text
        color='grey.1'
        fontSize='sm'
        fontWeight='600'
        fontStyle='fonts.heading'
        fontFamily='Lexend'
      >
        {title}
      </Text>
      <VStack alignItems='flex-start' gap='4' w='100%'>
        <HStack w='100%' gap='2' justifyContent='space-between'>
          <Box display='flex' flexDirection='row' gap='10px' flexWrap='wrap'>
            <Box
              h='32px'
              p='2'
              bg='brand.4'
              color='brand.1'
              fontSize='0.875rem'
              fontWeight='600'
              borderRadius='4px'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              {year}
            </Box>
            <Box
              h='32px'
              p='2'
              bg='brand.4'
              color='brand.1'
              fontSize='0.875rem'
              fontWeight='600'
              borderRadius='4px'
              display='flex'
              alignItems='center'
            >
              {milles} KM
            </Box>
          </Box>

          <Text
            color='grey.1'
            fontSize='fontSizes.ls'
            fontWeight='600'
            fontStyle='fonts.heading'
          >
            R$ {price}
          </Text>
        </HStack>
        <Link
          href={`https://wa.me/55${phoneCompany}?text=${messageBuy}`}
          target={"_blank"}
        >
          <Button fontSize='14px' variant='brand1'>
            Comprar
          </Button>
        </Link>
      </VStack>
    </VStack>
  )
}

export default BoxInfoAd
