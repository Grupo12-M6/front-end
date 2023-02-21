import { Flex } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { Background } from "../../components/Background"
import { Header } from "../../components/Header"
import { HeaderMobile } from "../../components/Header/HeaderMobile"
import { UseGetScreenWidth } from "../../hooks"
import { CardUserInfo } from "./CardUserInfo"

const Profile = () => {
  let { id } = useParams()

  const [, width] = UseGetScreenWidth()

  return (
    <Flex>
      {width >= 768 ? <Header /> : <HeaderMobile />}
      <Background />
      <Flex>
        <CardUserInfo id={id!} />
      </Flex>
    </Flex>
  )
}

export default Profile
