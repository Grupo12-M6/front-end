import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Flex, VStack } from "@chakra-ui/react"

import { api } from "../../services/api"
import { UseGetScreenWidth } from "../../hooks"

import { IAd } from "../../interfaces/ads"
import { IUser } from "../../interfaces/user"

import { CardUserInfo } from "./CardUserInfo"

import { List } from "../../components/List"
import { Header } from "../../components/Header"
import { FooterDesktop } from "../../components/Footer"
import { HeaderMobile } from "../../components/Header/HeaderMobile"
import { useAuth } from "../../contexts/AuthContext"

const Profile = () => {
  let { id } = useParams()
  const { token } = useAuth()

  const [userAds, setUserAds] = useState<IAd[]>([] as IAd[])
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser)

  const [, width] = UseGetScreenWidth()

  useEffect(() => {
    api
      .get(`/users/${id}/ads`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserAds(res.data)
        setUserInfo(res.data[0].user)
      })
      .catch((err) => console.log(err))
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
          list={userAds.filter((ad) => ad.motorType == "carro")}
        />
        <List
          title='Motos'
          id='motorcycles'
          list={userAds.filter((ad) => ad.motorType == "moto")}
        />
      </VStack>
      <FooterDesktop />
    </Flex>
  )
}

export default Profile
