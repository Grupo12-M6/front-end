import { Box, VStack } from "@chakra-ui/react"

export const Background = () => {
  return (
    <VStack w='100vw' h='100vh' position='absolute' zIndex={-1}>
      <Box w='100%' h='45%' maxH='650px' bgColor='brand.2' />
      <Box w='100%' h='55%' bgColor='grey.10' />
    </VStack>
  )
}
