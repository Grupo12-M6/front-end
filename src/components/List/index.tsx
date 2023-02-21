import { Box, Heading, HStack, VStack } from "@chakra-ui/react"
import { IAd } from "../../interfaces/ads"

import { CustomCard } from "../Card"

interface IListProps {
  title: string
  list: IAd[]
}

export const List = ({ title, list }: IListProps) => {
  return (
    <VStack>
      <Heading> {title} </Heading>
      <HStack gap='8'>
        {list.map((ad, index) => (
          // <CustomCard key={index} ad={ad}/>
          <Box />
        ))}
      </HStack>
    </VStack>
  )
}
