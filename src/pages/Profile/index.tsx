import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Flex } from "@chakra-ui/react"

import { api } from "../../services/api"
import { UseGetScreenWidth } from "../../hooks"

import { IAd } from "../../interfaces/ads"
import { IUser } from "../../interfaces/user"

import { CardUserInfo } from "./CardUserInfo"

import { List } from "../../components/List"
import { Header } from "../../components/Header"
import { FooterDesktop } from "../../components/Footer"
import { Background } from "../../components/Background"
import { HeaderMobile } from "../../components/Header/HeaderMobile"


const Profile = () => {
  let { id } = useParams()

  const [userAds, setUserAds] = useState<IAd[]>([])
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser)

  const [, width] = UseGetScreenWidth()

  useEffect(() => {
    api
      .get(
        `/users/${id}/ads` /* {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          } */
      )
      .then((res) => {
        setUserAds(res.data)
        setUserInfo(res.data.user)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Flex>
      {width >= 768 ? <Header /> : <HeaderMobile />}
      <Background />
      <CardUserInfo userInfo={userInfo} />

      <List
        title='Carros'
        list={userAds.filter((ad) => ad.motor_type == "carro")}
      />
      <List
        title='Motos'
        list={userAds.filter((ad) => ad.motor_type == "moto")}
      />
      <FooterDesktop />
    </Flex>
  )
}

export default Profile
