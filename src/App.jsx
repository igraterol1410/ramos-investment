import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import AppRouter from './routers/AppRouter'

function App() {

  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  )
}

export default App
