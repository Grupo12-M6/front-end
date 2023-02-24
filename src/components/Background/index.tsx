import { Box, VStack } from "@chakra-ui/react"

export const Background = () => {
  return (
    <VStack w='100vw' h='100vh' position='absolute' zIndex={-1} >
      <Box w='100%' h='45%' margin={0}  bgColor='brand.2'/>
      <Box w='100%' h='100%' margin={0}  position='absolute' zIndex={-1} bgColor='grey.8'/>
    </VStack>
  )
}
