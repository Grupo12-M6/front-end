import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { IAd } from "../../interfaces/ads"

import { CustomCard } from "../Card"

interface IListProps {
  title: string
  list: IAd[]
}

export const List = ({ title, list }: IListProps) => {
  return (
    <VStack
      w='100%'
      h='max-content'
      p='6'
      margin='0'
      alignItems='flex-start'
      overflowX='scroll'
      sx={{
        "&::-webkit-scrollbar": {
          width: "5px",
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "20px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
          height: "2px",
        },
      }}
    >
      <Heading fontFamily='Lexend' fontWeight='600' fontSize='md' color='black'>
        {title}
      </Heading>

      {list.length != 0 ? (
        <HStack gap='8'>
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
