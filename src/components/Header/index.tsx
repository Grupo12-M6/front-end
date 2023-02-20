import { Button, Flex, HStack, Text } from "@chakra-ui/react"

import { CustomLink } from "./CustomLink"
import { DefaultLogo } from "../../utils/defaultLogo"
import { UserMenu } from "../Menu/UserMenu"

export const Header = () => {
  function handleClickLogin() {}
  function handleClickRegister() {}

  return (
    <Flex
      w='100vw'
      minW='768'
      minH='80px'
      p='0 60px'
      bg='grey.10'
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
        justifyContent='flex-end'
      >
        <HStack
          h='100%'
          w='50%'
          p='0 30px 0 0'
          gap='2%'
          borderRight='2px'
          borderColor='grey.6'
          justifyContent='space-between'
        >
          <CustomLink href='#cars' content='Carros' />
          <CustomLink href='#motorcycles' content='Motos' />
          <CustomLink href='#auction' content='Leilão' />
        </HStack>

        <HStack w='45%' gap='4' justifyContent='space-between' pl='30px'>
          <Text
            as='button'
            w='max-content'
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
            m='0'
            h='48px'
            w='130px'
            minW='100px'
            margin='0'
            fontSize='xs'
            fontWeight='600'
            fontFamily='body'
            variant='outline1'
            onClick={() => handleClickRegister()}
          >
            Cadastrar
          </Button>
        </HStack>
        {/* if token -> <UserMenu/> instead of last VStack */}
        {/* <UserMenu name={}/> */}
      </Flex>
    </Flex>
  )
}
