import React from 'react'
import {
  List,
  ListItem,
  Link,
  Box,
  Flex,
  Center,
  Divider,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { SiFacebook, SiGmail, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <Grid 
    bg='brand.aquamarinePrimary' 
    color='white' 
    w='100%' 
    gridTemplateColumns='1fr' 
    px={['2rem','2rem', '2rem', '2rem']}
    >
      <GridItem w='100%' py={12} fontSize={18}>
        <Grid 
        gridTemplateColumns={['repeat(1fr)','repeat(1fr)','repeat(3, 1fr)','repeat(3, 1fr)']}
        >
            <GridItem 
            w='100%' 
            borderRight={['none','none','1px solid white','1px solid white']} 
            px={4} 
            marginBottom={4}>
              <Center 
              fontWeight='bold' 
              textAlign='center' 
              marginBottom={4}>
              Inversiones Ramos
              </Center>
              <Center 
              fontSize={14}
              px={4}
              >
              Somos distribuidores de productos de limpieza, bolsas plasticas, papelería en general y más...
              </Center>
              <Center 
              marginTop={4}>
                  <Flex 
                  gap={8}>
                      <Link 
                      href='https://www.facebook.com/profile.php?id=100084848200460' 
                      isExternal 
                      w='100%' 
                      h='100%'>
                        <Center 
                        color='white' 
                        marginTop='auto' 
                        marginBottom='auto'>
                          <SiFacebook 
                          fontSize={40} />
                        </Center>
                      </Link>
                      <Link 
                      href='https://www.instagram.com/inversiones_ramos_2030/' 
                      isExternal 
                      w='100%' 
                      h='100%'>
                        <Center 
                        color='white' 
                        marginTop='auto' 
                        marginBottom='auto'>
                          <SiInstagram fontSize={40} />
                        </Center>
                      </Link>
                  </Flex>
              </Center>
            </GridItem>
            <GridItem 
            w='100%' 
            borderRight={['none','none','1px solid white','1px solid white']} 
            px={4} 
            marginBottom={4}>
              <Center 
              fontWeight='bold' 
              textAlign='center' 
              marginBottom={4}>
              Contáctanos
              </Center>
              <Flex alignItems='center' gap={2} marginBottom={2} px={4} fontSize={14}>
                <FaPhoneAlt /> +58 212-5418688
              </Flex>
              <Flex alignItems='center' gap={2} marginBottom={2} px={4} fontSize={14}>
                <SiWhatsapp /> +58 412-3734835
              </Flex>
              <Flex alignItems='center' gap={2} px={4} fontSize={14}>
                <SiGmail /> inversionesramos2030@gmail.com
              </Flex>
            </GridItem>
            <GridItem w='100%' px={4} marginBottom={4}>
              <Center fontWeight='bold' textAlign='center' marginBottom={4}>
              Ubicación
              </Center>
              <Flex alignItems='center' gap={2} px={4} fontSize={14}>
                <FaLocationArrow /> La Concordia - Caracas
              </Flex>
            </GridItem>
        </Grid>
      </GridItem>
      <GridItem>
        <Center>
          <Divider w='80%' />
        </Center>
      </GridItem>
      <GridItem py={12} px={12}>
          <Center textAlign='center'>
          © 2022 Inversiones Ramos, Todos los derechos reservados
          </Center>
          <Center marginTop={4}>
          Inversiones Ramos 2030, C.A 
          </Center>
          <Center>
          Rif: J-501388717 
          </Center>
      </GridItem>
    </Grid>
  )
}

export default LandingFooter
