import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Flex, VStack } from "@chakra-ui/react"

import { UseGetScreenWidth } from "../../hooks"

import { CardUserInfo } from "./CardUserInfo"

import { List } from "../../components/List"
import { Header } from "../../components/Header"
import { FooterDesktop } from "../../components/Footer"
import { HeaderMobile } from "../../components/Header/HeaderMobile"
import { useAd } from "../../contexts/AdContext"
import { useUser } from "../../contexts/UserContext"

const Profile = () => {
  let { id } = useParams()

  const { listAdsByUser, adsByUser } = useAd()
  
  const [, width] = UseGetScreenWidth()
  
  useEffect(() => {
    listAdsByUser(id!)
    listOneUser(id!)
  }, [])
  const { listOneUser, currentUser } = useUser()
  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDirection='column'
      alignItems='center'
      overflowY='scroll'
      overflowX='hidden'
      scrollBehavior='smooth'
    >
      {width >= 768 ? <Header /> : <HeaderMobile />}

      <VStack
        w='100%'
        p='60px 0'
        gap='12'
        bgGradient='linear(to-b, brand.2 0%, brand.2 16%, grey.8 16%, grey.8 100%)'
      >
        <CardUserInfo userInfo={currentUser} />

        <List
          title='Carros'
          id='cars'
          list={adsByUser.filter((ad) => ad.motorType.toLowerCase() == "carro")}
        />
        <List
          title='Motos'
          id='motorcycles'
          list={adsByUser.filter((ad) => ad.motorType.toLowerCase() == "moto")}
        />
      </VStack>
      <FooterDesktop />
    </Flex>
  )
}

export default Profile
