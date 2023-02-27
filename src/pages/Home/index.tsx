import { useEffect } from "react"
import { Flex } from "@chakra-ui/react"

import { Intro } from "./Intro"
import { UseGetScreenWidth } from "../../hooks"

import { List } from "../../components/List"
import { useAd } from "../../contexts/AdContext"
import { Header } from "../../components/Header"
import { FooterDesktop } from "../../components/Footer"
import { HeaderMobile } from "../../components/Header/HeaderMobile"

const Home = () => {
  const [, width] = UseGetScreenWidth()
  const { ads, listAds } = useAd()

  useEffect(() => {
    listAds()
  }, [])

  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDirection='column'
      overflowX='hidden'
      scrollBehavior='smooth'
      bgColor='grey.8'
    >
      {width >= 768 ? <Header /> : <HeaderMobile />}
      <Flex flexDir='column'>
        <Intro />
        <List id='auction' title='Leilão' list={[]} />
        <List
          id='cars'
          title='Carros'
          list={ads.filter((ad) => ad.motorType.toLowerCase() == "carro")}
        />
        <List
          id='motorcycles'
          title='Motos'
          list={ads.filter((ad) => ad.motorType.toLowerCase() == "moto")}
        />
      </Flex>
      <FooterDesktop />
    </Flex>
  )
}

export default Home
