import { Avatar, Button, Flex, HStack, Tag, Text } from "@chakra-ui/react"
import { IUser } from "../../interfaces/user"

interface ICardUserProps {
  userInfo: IUser
}

export const CardUserInfo = ({ userInfo }: ICardUserProps) => {
  // const { userId } = useContext()
  const handleClick = () => {}

  return (
    <Flex>
      <Avatar name={userInfo.name} />
      <HStack>
        <Text> {userInfo.name} </Text>
        {!!userInfo.is_seller && <Tag> Anunciante </Tag>}
      </HStack>
      <Text> {userInfo.description} </Text>
      {/* {userinfo.id === userId && (
        <Button variant='outlineBrand1' onClick={() => handleClick()}>
          Criar anuncio
        </Button>
      )} */}
    </Flex>
  )
}
