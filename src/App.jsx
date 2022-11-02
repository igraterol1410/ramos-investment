import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import AppRouter from './routers/AppRouter'

function App() {
  const colors = {
    brand: {
      blue: '#294674',
      aquamarinePrimary: '#189ab7',
      yellow: '#efe327',
    },
  }
  
  const theme = extendTheme({ colors })
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  )
}

export default App
