import { ChakraBaseProvider } from "@chakra-ui/react"
import { Router } from "./routes"

function App() {
  return (
    <ChakraBaseProvider>
      <Router />
    </ChakraBaseProvider>
  )
}

export default App
