import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react"

export const Intro = () => {
  return (
    <VStack
      w='100%'
      h={["80vh", "80vh", "70vh", "70vh"]}
      p='4'
      gap='6'
      bgColor='brand.2'
      alignItems='center'
      justifyContent='center'
    >
      <Heading
        fontFamily='Lexend'
        fontSize={["2xl", "2xl", "4xl", "4xl"]}
        fontWeight='700'
        lineHeight={["40px", "40px", "56px", "56px"]}
        color='grey.10'
        textAlign='center'
      >
        Velocidade e experiência em um <br /> lugar feito para você
      </Heading>
      <Text fontWeight='400' color='grey.9' textAlign='center'>
        Um ambiente feito para você explorar o seu melhor
      </Text>
      <Flex
        gap={["4", "4", "6", "6"]}
        flexDir={["column", "column", "row", "row"]}
      >
        <Button
          as='a'
          href='#cars'
          variant='outlineLight'
          w={["288px", "288px", "180px", "180px"]}
        >
          Carros
        </Button>
        <Button
          as='a'
          href='#motorcycles'
          variant='outlineLight'
          w={["288px", "288px", "180px", "180px"]}
        >
          Motos
        </Button>
      </Flex>
    </VStack>
  )
}
