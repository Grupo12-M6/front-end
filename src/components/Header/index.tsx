import {
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

import { CustomLink } from "./CustomLink"
import { UserMenu } from "../Menu/UserMenu"
import { useAuth } from "../../contexts/AuthContext"
import { DefaultLogo } from "../../utils/defaultLogo"
import { LoginModal } from "../Modals/LoginModal"

export const Header = () => {
  const { token, user } = useAuth()

  const {
    isOpen: isMLoginOpen,
    onOpen: onMLoginOpen,
    onClose: onMLoginClose,
  } = useDisclosure()

  return (
    <Flex
      id='top'
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
      <DefaultLogo/>
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
          <UserMenu name={user.name} isSeller={user.isSeller}/>
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

      <LoginModal isOpen={isMLoginOpen} onClose={onMLoginClose} />
    </Flex>
  )
}
