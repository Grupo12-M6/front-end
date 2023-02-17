import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react"

import { HiMenu } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { CustomLink } from "./CustomLink"
import { DefaultLogo } from "../../utils/defaultLogo"

export const HeaderMobile = () => {
  function handleClickLogin() {}
  function handleClickRegister() {}

  return (
    <Accordion w='100vw' allowToggle>
      <AccordionItem w='100%' bg='white' boxShadow='md'>
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
                  onClick={() => handleClickLogin()}
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
                  onClick={() => handleClickRegister()}
                >
                  Cadastrar
                </Button>
              </VStack>

              {/* if token -> <UserMenu/> instead of last VStack */}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
