import React from 'react'
import {
  List,
  ListItem,
  Link,
  Box,
  Flex,
  Center
} from '@chakra-ui/react'
import { SiFacebook, SiGmail,SiInstagram } from "react-icons/si";

const LandingFooter = () => {
  return (
    <Flex flexDirection={['column','column', 'row','row']} w='100%' py={12} bg='#19a4b0' color='white' fontSize={18}>
      <Box w='100%'>
        <Center marginBottom={4} fontWeight='bold'>
        Siguenos en nuestras redes sociales
        </Center>
        <Center>
          <List>
            <ListItem marginBottom={4}>
              <Flex alignItems='center' gap={3}>
                <SiFacebook />
                <Link href='https://chakra-ui.com' isExternal>
                Facebook
                </Link>
              </Flex>
            </ListItem>
            <ListItem marginBottom={4}>
              <Flex alignItems='center' gap={3}>
                <SiInstagram />
                <Link href='https://chakra-ui.com' isExternal>
                Instagram
                </Link>
              </Flex>
            </ListItem>
            <ListItem marginBottom={4}>
              <Flex alignItems='center' gap={3}>
                <SiGmail />
                <Link href='https://chakra-ui.com' isExternal>
                Correo
                </Link>
              </Flex>
            </ListItem>
          </List>
        </Center>
      </Box>
      <Box w='100%'>
        <Center>
        Contáctanos
        </Center>
      </Box>
    </Flex>
  )
}

export default LandingFooter
