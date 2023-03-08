import { Text, Box } from "@chakra-ui/react"

interface IBoxDescAd {
  description: string
}

const BoxDescAd = ({ description }: IBoxDescAd) => {
  return (
    <Box
      w='100%'
      p='8'
      backgroundColor='grey.10'
      borderRadius='4px'
      display='flex'
      flexDirection='column'
      gap='6'
    >
      <Text
        fontStyle='fonts.heading'
        fontSize='sm'
        color='grey.1'
        fontWeight='600'
        fontFamily='Lexend'
      >
        Descrição
      </Text>
      <Text fontWeight='400' fontStyle='fonts.body' lineHeight='28px'>
        {description}
      </Text>
    </Box>
  )
}

export default BoxDescAd
