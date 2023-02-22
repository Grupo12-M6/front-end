import React from "react"
import {
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"

import { CustomLink } from "./CustomLink"
import { UserMenu } from "../Menu/UserMenu"
import { LoginForm } from "../Form/LoginForm"
import { ModalBasic } from "../Modals/baseModal"
import { useAuth } from "../../contexts/AuthContext"
import { DefaultLogo } from "../../utils/defaultLogo"

export const Header = () => {
  const { token, user } = useAuth()

  const {
    isOpen: isMLoginOpen,
    onOpen: onMLoginOpen,
    onClose: onMLoginClose,
  } = useDisclosure()

  const initialRefLogin = React.useRef(null)
  const finalRefLogin = React.useRef(null)
  

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

        {token ? (
          <UserMenu name={user.name}/>
        ) : (
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
              ref={finalRefLogin}
              onClick={() => onMLoginOpen()}
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
            >
              Cadastrar
            </Button>
          </HStack>
        )}
      </Flex>

      <ModalBasic
        initialRef={initialRefLogin}
        finalRef={finalRefLogin}
        isOpen={isMLoginOpen}
        onClose={onMLoginClose}
      >
        <VStack p='30px 15px' alignItems='flex-start' h='542px' justifyContent='space-between'>
        <Heading fontFamily='Lexend' fontSize='md' color='black'> Login </Heading>
        <LoginForm initialRef={initialRefLogin}/>
        <VStack gap='4' alignItems='center' w='100%'>
          <Text fontSize='0.875rem'>Ainda não possui conta?</Text>
          <Button
            onClick={() => {
              onMLoginClose
            }}
            w='100%'
            variant='outline2'
          >
            Cadastrar
          </Button>
        </VStack>
        </VStack>
      </ModalBasic>
    </Flex>
  )
}
