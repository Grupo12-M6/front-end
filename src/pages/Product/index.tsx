import { Box, Flex, Text, VStack } from "@chakra-ui/react"

import { UseGetScreenWidth } from "../../hooks"
import { Header } from "../../components/Header"
import { HeaderMobile } from "../../components/Header/HeaderMobile"
import { useAd } from "../../contexts/AdContext"
import { FooterDesktop } from "../../components/Footer"
import BoxGalleryImages from "../../components/BoxGalleryImages"
import BoxInfoAd from "../../components/BoxInfoAd/Index"
import BoxInfoSaller from "../../components/BoxInfoSaller"
import BoxCommentsAd from "../../components/BoxCommentsAd"
import BoxBannerAd from "../../components/BoxBannerAd"
import BoxDescAd from "../../components/BoxDescAd"
import BoxInputAd from "../../components/BoxInputAd"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const Product = () => {
  const [, width] = UseGetScreenWidth()
  const { ads, listOneAd, listCommentsForOneAd, comments, update } = useAd()
  const { id } = useParams()
  const { user } = useAuth()

  useEffect(() => {
    listOneAd(id)
    listCommentsForOneAd(id)
  }, [update])

  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDirection='column'
      overflowY='scroll'
      overflowX='hidden'
      scrollBehavior='smooth'
    >
      {width >= 768 ? <Header /> : <HeaderMobile />}
      <VStack
        w='100%'
        gap='12'
        bgGradient='linear(to-b, brand.2 0%, brand.2 45%, grey.8 45%, grey.8 100%)'
      >
        {ads[0] ? (
          <Box
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
            marginLeft='95px'
            marginRight='95px'
            marginTop='25px'
            marginBottom='35px'
            justifyContent='space-between'
            alignContent='center'
          >
            <Box
              width='500px'
              display='flex'
              flexDirection='column'
              rowGap='15px'
            >
              <BoxBannerAd imageLink={ads[0].images} />

              <BoxInfoAd
                title={ads[0].title}
                year={ads[0].year}
                milles={ads[0].mileage}
                price={ads[0].price}
              />
              <BoxDescAd description={ads[0].description} />
            </Box>
            <Box
              width='300px'
              display='flex'
              flexDirection='column'
              rowGap='15px'
            >
              <BoxGalleryImages images={ads[0].images} />
              <BoxInfoSaller
                name={ads[0].user.name}
                description={ads[0].user.description}
                id={ads[0].user.id}
              />
            </Box>
            <Box
              width='500px'
              display='flex'
              marginTop='15px'
              flexDirection='column'
            >
              <BoxCommentsAd comments={comments} />
              {user ? (
                <BoxInputAd active={false} name={user.name}></BoxInputAd>
              ) : (
                <BoxInputAd active={true} name='Visitante'></BoxInputAd>
              )}
              {/* <BoxInputAd name="Visitante"></BoxInputAd> */}
            </Box>
          </Box>
        ) : (
          <Text>Anuncio Não Encontrado</Text>
        )}
      </VStack>
      <FooterDesktop />
    </Flex>
  )
}

export default Product
