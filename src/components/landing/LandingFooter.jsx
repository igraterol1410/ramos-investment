import React from 'react'
import {
  List,
  ListItem,
  Link,
  Box,
  Flex,
  Center,
  Divider
} from '@chakra-ui/react'
import { SiFacebook, SiGmail,SiInstagram } from "react-icons/si";

const LandingFooter = () => {
  return (
    <Flex flexDirection='column' bg='#19a4b0' color='white'>
      <Flex flexDirection={['column','column', 'row','row']} w='100%' py={12} fontSize={18}>
        <Center w='100%'>
          <Box w='100%' borderRight='1px solid #219737' px={4} marginBottom={4}>
            <Center>
            Inversiones Ramos
            </Center>
          </Box>
          <Box w='100%' borderRight='1px solid #219737' px={4} marginBottom={4}>
            <Center marginBottom={4} fontWeight='bold' textAlign='center'>
            Siguenos en nuestras redes sociales
            </Center>
            <Center>
                <Flex gap={8}>
                    <Link href='https://chakra-ui.com' isExternal w='100%' h='100%'>
                      <Center color='white' marginTop='auto' marginBottom='auto'>
                        <SiFacebook fontSize={60} />
                      </Center>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal w='100%' h='100%'>
                      <Center color='white' marginTop='auto' marginBottom='auto'>
                        <SiInstagram fontSize={60} />
                      </Center>
                    </Link>
                </Flex>
            </Center>
          </Box>
          <Box w='100%' borderRight='1px solid #219737' px={4} marginBottom={4}>
            <Center>
            Contáctanos
            </Center>
          </Box>
          <Box w='100%' borderRight='1px solid #219737' px={4} marginBottom={4}>
            <Center>
            Ubicación
            </Center>
          </Box>
        </Center>
      </Flex>
      <Center>
        <Divider w='80%' />
      </Center>
      <Center py={12}>
        Holaaa
      </Center>
    </Flex>
  )
}

export default LandingFooter
