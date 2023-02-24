import { Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import { UseGetScreenWidth } from "../../hooks"
import { IAd } from "../../interfaces/ads"

import { CustomCard } from "../Card"

interface IListProps {
  id: string
  title: string
  list: IAd[]
}

export const List = ({ id, title, list }: IListProps) => {
  const [, width] = UseGetScreenWidth()
  const perView = width / 350

  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    slides: {
      perView: perView,
      spacing: 15,
    },
  })

  return (
    <VStack
      id={id}
      w='100%'
      h='max-content'
      p='6'
      margin='0'
      alignItems='flex-start'
    >
      <Heading
        fontFamily='Lexend'
        fontWeight='600'
        fontSize='md'
        color='black'
        marginBottom='12'
      >
        {title}
      </Heading>

      {list.length != 0 ? (
        <HStack ref={ref} w='100%'>
          {list.map((ad, index) => (
            <CustomCard key={index} ad={ad} />
          ))}
        </HStack>
      ) : (
        <Text> Ainda não há nenhum anúncio para esse tipo</Text>
      )}
    </VStack>
  )
}
