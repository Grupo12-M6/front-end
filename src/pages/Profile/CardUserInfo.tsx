import { useEffect, useState } from "react"
import { Avatar, Button, Flex, HStack, Tag, Text } from "@chakra-ui/react"

import { api } from "../../services/api"

interface ICardUserProps {
  id: string
}

interface IUser {
  id: string
  name: string
  email: string
  cpf: string
  phone_number: string
  birthday: Date
  description: string
  is_seller: boolean
  address: string
}

export const CardUserInfo = ({ id }: ICardUserProps) => {
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser)
  // const token = useContext()
  // const {userId} = useContext

  useEffect(() => {
    api
      .get(
        `/users/${id}/ads` /* {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          } */
      )
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleClick = () => {}

  return (
    <Flex>
      <Avatar name={userInfo.name} />
      <HStack>
        <Text> {userInfo.name} </Text>
      </HStack>
      {!!userInfo.is_seller && <Tag> Anunciante </Tag>}
      <Text> {userInfo.description} </Text>
      {/* {id === userId && (
        <Button variant='outlineBrand1' onClick={() => handleClick()}>
          Criar anuncio
        </Button>
      )} */}
    </Flex>
  )
}
