import { Flex } from "@chakra-ui/react"

import { UseGetScreenWidth } from "../../hooks"
import { Header } from "../../components/Header"
import { HeaderMobile } from "../../components/Header/HeaderMobile"
import { FooterDesktop } from "../../components/Footer"
import { Background } from "../../components/Background"

const Home = () => {
  const [, width] = UseGetScreenWidth()

  return (
    <Flex w='100vw' h='100vh' flexDirection='column'>
      {width >= 768 ? <Header /> : <HeaderMobile />}
      <Background />
      <FooterDesktop />
    </Flex>
  )
}

export default Home
