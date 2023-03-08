import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"

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
      {width >= 768 ? (
        <>
          <Header />
          <HStack
            w='100%'
            p='6'
            gap='6'
            justifyContent='center'
            alignItems='flex-start'
            bgGradient='linear(to-b, brand.2 0%, brand.2 35%, grey.8 35%, grey.8 100%)'
          >
            {ads[0] ? (
              <>
                <VStack w='50%' maxW='750px' alignItems='flex-start'>
                  <BoxBannerAd imageLink={ads[0].images} />

                  <BoxInfoAd
                    title={ads[0].title}
                    year={ads[0].year}
                    milles={ads[0].mileage}
                    price={ads[0].price}
                  />
                  <BoxDescAd description={ads[0].description} />

                  <Box w='100%' gap='4' display='flex' flexDirection='column'>
                    <BoxCommentsAd comments={comments} />
                    {user ? (
                      <BoxInputAd active={false} name={user.name}></BoxInputAd>
                    ) : (
                      <BoxInputAd active={true} name='Visitante'></BoxInputAd>
                    )}
                    {/* <BoxInputAd name="Visitante"></BoxInputAd> */}
                  </Box>
                </VStack>
                <VStack w='30%' maxW='440px' alignItems='flex-start'>
                  <BoxGalleryImages images={ads[0].images} />
                  <BoxInfoSaller
                    name={ads[0].user.name}
                    description={ads[0].user.description}
                    id={ads[0].user.id}
                  />
                </VStack>
              </>
            ) : (
              <Text>Anuncio não encontrado</Text>
            )}
          </HStack>
        </>
      ) : (
        <>
          <HeaderMobile />
          <VStack
            w='100%'
            p='6'
            gap='6'
            justifyContent='center'
            alignItems='flex-start'
            bgGradient='linear(to-b, brand.2 0%, brand.2 35%, grey.8 35%, grey.8 100%)'
          >
            {ads[0] ? (
              <>
                <BoxBannerAd imageLink={ads[0].images} />

                <BoxInfoAd
                  title={ads[0].title}
                  year={ads[0].year}
                  milles={ads[0].mileage}
                  price={ads[0].price}
                />
                <BoxDescAd description={ads[0].description} />
                <BoxGalleryImages images={ads[0].images} />
                <BoxInfoSaller
                  name={ads[0].user.name}
                  description={ads[0].user.description}
                  id={ads[0].user.id}
                />

                <Box w='100%' gap='4' display='flex' flexDirection='column'>
                  <BoxCommentsAd comments={comments} />
                  {user ? (
                    <BoxInputAd active={false} name={user.name}></BoxInputAd>
                  ) : (
                    <BoxInputAd active={true} name='Visitante'></BoxInputAd>
                  )}
                  {/* <BoxInputAd name="Visitante"></BoxInputAd> */}
                </Box>
              </>
            ) : (
              <Text>Anuncio não encontrado</Text>
            )}
          </VStack>
        </>
      )}

      <FooterDesktop />
    </Flex>
  )
}

export default Product
