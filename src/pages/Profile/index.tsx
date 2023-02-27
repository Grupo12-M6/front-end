import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Flex, VStack } from "@chakra-ui/react"

import { UseGetScreenWidth } from "../../hooks"

import { CardUserInfo } from "./CardUserInfo"

import { List } from "../../components/List"
import { Header } from "../../components/Header"
import { FooterDesktop } from "../../components/Footer"
import { HeaderMobile } from "../../components/Header/HeaderMobile"
import { useAd } from "../../contexts/AdContext"

const Profile = () => {
  let { id } = useParams()

  const { listAdsByUser, adsByUser, userInfo } = useAd()

  const [, width] = UseGetScreenWidth()

  useEffect(() => {
    listAdsByUser(id!)
  }, [])

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
        <CardUserInfo userInfo={userInfo} />

        <List
          title='Carros'
          id='cars'
          list={adsByUser.filter((ad) => ad.motorType == "carro")}
        />
        <List
          title='Motos'
          id='motorcycles'
          list={adsByUser.filter((ad) => ad.motorType == "moto")}
        />
      </VStack>
      <FooterDesktop />
    </Flex>
  )
}

export default Profile
