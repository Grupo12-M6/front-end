import { Button, Flex, HStack, Text } from "@chakra-ui/react"

import { CustomLink } from "./CustomLink"
import { DefaultLogo } from "../../utils/defaultLogo"

export const Header = () => {
  function handleClickLogin() {}
  function handleClickRegister() {}

  return (
    <Flex
      w='100vw'
      minH='80px'
      p='0 60px'
      minW='768'
      alignItems='center'
      justifyContent='space-between'
      borderBottom='2px'
      borderColor='grey.6'
      boxShadow='-webkit-box-shadow: 0px 7px 67px -28px rgba(0,0,0,0.41);
      -moz-box-shadow: 0px 7px 67px -28px rgba(0,0,0,0.41);
      box-shadow: 0px 7px 67px -28px rgba(0,0,0,0.41);'
    >
      <DefaultLogo />
      <Flex
        h='100%'
        w='45%'
        minW='382px'
        alignItems='center'
        justifyContent='space-between'
      >
        <HStack
          h='100%'
          w='50%'
          p='0 5% 0 0'
          gap='2%'
          borderRight='2px'
          borderColor='grey.6'
          justifyContent='space-between'
        >
          <CustomLink href='#cars' content='Carros' />
          <CustomLink href='#motorcycles' content='Motos' />
          <CustomLink href='#auction' content='Leilão' />
        </HStack>

        <HStack w='50%' gap='2%' p='0 0 0 5%' justifyContent='space-between'>
          <Text
            as='button'
            color='grey.2'
            fontSize='xs'
            textAlign='left'
            fontWeight='600'
            fontFamily='body'
            _hover={{ color: "brand.1" }}
            _focus={{ color: "brand.1" }}
            onClick={() => handleClickLogin()}
          >
            Fazer Login
          </Text>
          <Button
            h='48px'
            p='0'
            w='130px'
            color='grey.0'
            bg='transparent'
            margin='0'
            fontSize='xs'
            fontWeight='600'
            fontFamily='body'
            border='2px'
            borderColor='grey.4'
            borderRadius='4px'
            _hover={{
              bg: "grey.1",
              color: "grey.10",
              borderColor: "grey.10",
            }}
            onClick={() => handleClickRegister()}
          >
            Cadastrar
          </Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
