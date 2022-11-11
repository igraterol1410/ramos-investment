import React from 'react'
import {
  HStack,
  Box,
  Image,
  Heading,
  Center,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react'

import ProductsBg from '../../assets/about-us.webp'
import Animation from '../../assets/animation2.svg'

const LandingAboutUs = () => {
  return (
    <Grid 
    bg='brand.blue' 
    color='white' 
    py={6} 
    position='relative'
    bgGradient='linear(to-b, brand.aquamarinePrimary, brand.blue)'
    >
      <Heading zIndex='2'>
        <Center textAlign='center'>
        Quienes somos?
        </Center>
      </Heading>
      <Grid 
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
      gap={['2','2','6','6']} 
      w='100%'
      position='relative'
      px={4}
      >
        <GridItem
        py={4}
        order={['10','10','-10','-10']}
        px={4}
        textAlign='center'
        display='grid'
        alignItems='center'
        >
          <Box fontSize={18} textAlign='left'>
            <Text marginBottom={2}>
            Somos Inversiones Ramos 2030, C.A comprometidos en brindarle la mejor Atención Personalizada para proveer sus artículos de oficina, papelería, consumibles, suministros de cafetería, productos de limpieza y mucho más (Todo lo que necesite).
            </Text>
            <Text>
              Con mas de 30 años de experiencia nos destacamos por facilitar el proceso de compras de productos de gran calidad.
            </Text>
          </Box>
        </GridItem>
        <GridItem 
        h='100%' 
        w='100%'
        display='grid'
        alignItems='center'
        justifyContent='center'
        >
          <Box
          w='100%'
          h='100%'
          // backgroundImage={Animation}
          // bgRepeat='no-repeat'
          display='grid'
          gridTemplateColumns='1fr'
          alignContent='center'
          justifyContent='center'
          >
            <Center>
              <Image 
              src={ProductsBg} 
              alt='Logo de inversiones ramos' 
              w='50%'
              borderRadius='48px'
              />
            </Center>
          </Box>
        </GridItem>
    </Grid>
    </Grid>
  )
}

export default LandingAboutUs
