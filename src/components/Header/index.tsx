import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  Button,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"

import { HiMenu } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { CustomBreadcrumbLink } from "./CustomBreadcrumbLink"

export const Header = () => {
  function handleClickLogin() {}
  function handleClickRegister() {}

  return (
    <Accordion w='100vw'>
      <AccordionItem w='100%' bg='white'>
        {({ isExpanded }) => (
          <>
            <Heading p='4 2'>
              <Box as='span' flex='1' textAlign='left'>
                Motors Shop
              </Box>

              <AccordionButton>
                {isExpanded ? (
                  <CgClose fontSize='12px' color='grey.1' />
                ) : (
                  <HiMenu fontSize='12px' color='grey.1' />
                )}
              </AccordionButton>
            </Heading>

            <AccordionPanel>
              <Breadcrumb
                p='4 2'
                borderTop='1px solid grey.4'
                borderBottom='1px solid grey.4'
                display='flex'
                flexDir='column'
                justifyContent='space-between'
                alignItems='flex-start'
              >
                <CustomBreadcrumbLink href='#cars' content='Carros' />
                <CustomBreadcrumbLink href='#motorcycles' content='Motos' />
                <CustomBreadcrumbLink href='#auction' content='Leilão' />
              </Breadcrumb>

              <VStack p='4 2' justifyContent='space-between'>
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
                  color='grey.0'
                  fontSize='xs'
                  fontWeight='600'
                  fontFamily='body'
                  border='1.5px solid grey.4'
                  borderRadius='4px'
                  bg='transparent'
                  _hover={{
                    color: "grey.10",
                    bg: "grey.1",
                  }}
                  onClick={() => handleClickRegister()}
                >
                  Cadastrar
                </Button>
              </VStack>

              {/* <VStack p='4 2' justifyContent='space-between'>
                    / user image
                    / user name
              </VStack> */}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
