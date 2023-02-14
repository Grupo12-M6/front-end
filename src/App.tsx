import { ChakraBaseProvider } from "@chakra-ui/react"

import { Router } from "./routes"
import { theme } from "./styles/theme"

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router />
    </ChakraBaseProvider>
  )
}

export default App
