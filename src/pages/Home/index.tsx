import { Flex } from "@chakra-ui/react"

import { UseGetScreenWidth } from "../../hooks"
import { Header } from "../../components/Header"
import { HeaderMobile } from "../../components/Header/HeaderMobile"
import { CustomCard } from "../../components/Card"

const ad = {
  image: 'https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?cs=srgb&dl=pexels-pixabay-268941.jpg&fm=jpg',
  title: 'Imagem',
  description: 'jhjdhfjhdjhfjdhfjdhjfhdjfdjhfdjfdjfdfdjhjdhfjhdjhfjdhfjdhjfhdjfdjhfdjfdjfdfdjhjdhfjhdjhfjdhfjdhjfhdjfdjhfdjfdjfdfdjhjdhfjhdjhfjdhfjdhjfhdjfdjhfdjfdjfdfd',
  userName: 'nominho',
  mileage: 120,
  year: 2010,
  price: 258000,
}

const Home = () => {
  const [, width] = UseGetScreenWidth()

  return (
    <Flex w='100vw' h='100vh' flexDirection='column'>
      {width >= 768 ? <Header /> : <HeaderMobile />}
      <CustomCard ad={ad}/>
      <CustomCard ad={ad} isActive={false}/>
      <CustomCard ad={ad} isActive={true}/>
      <CustomCard ad={ad} isMine={true}/>
    </Flex>

  )
}

export default Home
