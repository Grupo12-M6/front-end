import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"

import { HiMenu } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

import { CustomLink } from "./CustomLink"
import { UserMenu } from "../Menu/UserMenu"
import { useAuth } from "../../contexts/AuthContext"
import { DefaultLogo } from "../../utils/defaultLogo"
import { LoginModal } from "../Modals/LoginModal"
import { RegisterModal } from "../Modals/RegisterModal"
import { Dialog } from "../Dialog"

export const HeaderMobile = () => {
  const { token, user } = useAuth()

  const {
    isOpen: isMLoginOpen,
    onOpen: onMLoginOpen,
    onClose: onMLoginClose,
  } = useDisclosure()

  const {
    isOpen: isMRegisterOpen,
    onOpen: onMRegisterOpen,
    onClose: onMRegisterClose,
  } = useDisclosure()

  const {
    isOpen: isDialogOpen,
    onOpen: onDialogOpen,
    onClose: onDialogClose,
  } = useDisclosure()

  return (
    <Accordion id='top' w='100vw' allowToggle>
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
                <CustomLink href='#auction' content='Leil??o' />
              </Flex>

              {token ? (
                <UserMenu name={user.name} isSeller={user.isSeller} />
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
                    onClick={() => onMRegisterOpen()}
                  >
                    Cadastrar
                  </Button>
                </VStack>
              )}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <LoginModal
        isOpen={isMLoginOpen}
        onClose={onMLoginClose}
        onOpenRegister={onMRegisterOpen}
      />
      <RegisterModal
        isOpen={isMRegisterOpen}
        onClose={onMRegisterClose}
        onOpenDialog={onDialogOpen}
      />
      <Dialog title='Sucesso!' isOpen={isDialogOpen} onClose={onDialogClose}>
        <VStack
          gap='4'
          alignItems={["center", "center", "flex-start", "flex-start"]}
        >
          <Text
            fontFamily='Lexend'
            fontSize='xs'
            fontWeight='500'
            color='black'
          >
            Sua conta foi criada com sucesso!
          </Text>
          <Text fontSize='xs' fontWeight='400' color='grey.2' lineHeight='28px'>
            Agora voc?? poder?? ver seus neg??cios crescendo em grande escala
          </Text>
          <Button
            variant='brand1'
            onClick={() => {
              onDialogClose()
              onMLoginOpen()
            }}
          >
            Ir para o login
          </Button>
        </VStack>
      </Dialog>
    </Accordion>
  )
}
