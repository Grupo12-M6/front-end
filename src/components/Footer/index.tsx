import { Box, Container, Stack, Text, IconButton } from "@chakra-ui/react"
import { IoIosArrowUp } from "react-icons/io"
import { WhiteLogo } from "../../utils/whiteLogo"

export const FooterDesktop = () => {
  return (
    <Box
      bg='black'
      color='grey.10'
      w='100%'
      position='relative'
      bottom='0'
    >
      <Container
        as={Stack}
        maxW='95%'
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <WhiteLogo />

        <Text textAlign='center' fontSize='0.875rem'>
          © 2022 - Todos os direitos reservados.
        </Text>
        <IconButton
          bg='grey.1'
          aria-label='Search database'
          fontSize={20}
          icon={<IoIosArrowUp />}
          onClick={() => window.location.href='#top'}
        />
      </Container>
    </Box>
  )
}
