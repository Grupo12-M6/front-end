import React from "react"
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"

import { HiMenu } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

import { CustomLink } from "./CustomLink"
import { UserMenu } from "../Menu/UserMenu"
import { LoginForm } from "../Form/LoginForm"
import { ModalBasic } from "../Modals/baseModal"
import { useAuth } from "../../contexts/AuthContext"
import { DefaultLogo } from "../../utils/defaultLogo"

export const HeaderMobile = () => {
  const { token, user } = useAuth()

  const {
    isOpen: isMLoginOpen,
    onOpen: onMLoginOpen,
    onClose: onMLoginClose,
  } = useDisclosure()

  const initialRefLogin = React.useRef(null)
  const finalRefLogin = React.useRef(null)

  return (
    <Accordion w='100vw' allowToggle>
      <AccordionItem w='100%' bg='grey.10' boxShadow='md'>
        {({ isExpanded }) => (
          <>
            <Flex
              p='4'
              fontSize='md'
              justifyContent='space-between'
              alignItems='center'
            >
              <DefaultLogo />

              <AccordionButton w='18px' h='18px' p='0'>
                {isExpanded ? (
                  <CgClose size='100%' color='grey.1' />
                ) : (
                  <HiMenu size='100%' />
                )}
              </AccordionButton>
            </Flex>

            <AccordionPanel p='0'>
              <Flex
                h='220px'
                p='32px 16px'
                borderTop='2px'
                borderBottom='2px'
                borderColor='grey.4'
                flexDir='column'
                justifyContent='space-between'
                alignItems='flex-start'
              >
                <CustomLink href='#cars' content='Carros' />
                <CustomLink href='#motorcycles' content='Motos' />
                <CustomLink href='#auction' content='Leilão' />
              </Flex>

              {token ? (
                <UserMenu name={user.name} />
              ) : (
                <VStack
                  h='180px'
                  p='32px 16px'
                  justifyContent='space-between'
                  alignItems='flex-start'
                >
                  <Text
                    as='button'
                    color='grey.2'
                    fontSize='xs'
                    fontWeight='600'
                    fontFamily='body'
                    _hover={{ color: "brand.1" }}
                    _focus={{ color: "brand.1" }}
                    onClick={() => onMLoginOpen()}
                  >
                    Fazer Login
                  </Text>
                  <Button
                    w='100%'
                    h='48px'
                    p='0'
                    margin='0'
                    fontSize='xs'
                    variant='outline1'
                  >
                    Cadastrar
                  </Button>
                </VStack>
              )}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <ModalBasic
        initialRef={initialRefLogin}
        finalRef={finalRefLogin}
        isOpen={isMLoginOpen}
        onClose={onMLoginClose}
      >
        <VStack
          p='20px 5px'
          alignItems='flex-start'
          h='542px'
          justifyContent='space-between'
        >
          <Heading fontFamily='Lexend' fontSize='md' color='black'>
            Login
          </Heading>
          <LoginForm initialRef={initialRefLogin} />
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
    </Accordion>
  )
}
