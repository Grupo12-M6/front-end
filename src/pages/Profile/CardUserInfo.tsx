import { Avatar, Button, HStack, Tag, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { ModalCreateAds } from "../../components/Modals/createAdsModal"
import { useAuth } from "../../contexts/AuthContext"
import { IUser } from "../../interfaces/user"

interface ICardUserProps {
  userInfo: IUser 
}

export const CardUserInfo = ({ userInfo }: ICardUserProps) => {
  const { user } = useAuth()

  const {
    isOpen,
    onOpen,
    onClose,
  } = useDisclosure()

  return (
    <VStack
      gap='6'
      alignItems='flex-start'
      w='90%'
      maxW='1240px'
      bgColor='grey.10'
      borderRadius='4px'
      paddingLeft='8'
      paddingRight='8'
      paddingTop='12'
      paddingBottom='12'
    >
      <Avatar name={userInfo.name} size='xl' />
      <HStack gap='2'>
        <Text fontFamily='Lexend' fontWeight='600' fontSize='sm' color='grey.1'>
          {userInfo.name}
        </Text>
        {userInfo.isSeller && (
          <Tag
            p='8px 12px'
            fontSize='0.875rem'
            fontWeight='500'
            color='brand.1'
            bgColor='brand.4'
          >
            Anunciante
          </Tag>
        )}
      </HStack>
      <Text fontSize='xs' fontWeight='400' lineHeight='28px'>
        {userInfo.description}
      </Text>
      {userInfo.id === user.id && (
        <Button
          variant='outlineBrand1'
          fontSize='xs'
          padding='22px 18px'
          onClick={() => onOpen()}
        >
          Criar anuncio
        </Button>
      )}
      <ModalCreateAds onClose={onClose} isOpen={isOpen} />
    </VStack>
  )
}
