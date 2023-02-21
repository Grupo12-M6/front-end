import { Avatar, Button, HStack, Tag, Text, VStack } from "@chakra-ui/react"
import { IUser } from "../../interfaces/user"

interface ICardUserProps {
  userInfo: IUser
}

export const CardUserInfo = ({ userInfo }: ICardUserProps) => {
  // const { userId } = useContext()
  const handleClick = () => {}

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
        {!!userInfo.is_seller && (
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

     {/*  {userInfo.id === userid && (
        <Button
          variant='outlineBrand1'
          fontSize='xs'
          padding='22px 18px'
          onClick={() => handleClick()}
        >
          Criar anuncio
        </Button>
      )} */}
    </VStack>
  )
}
