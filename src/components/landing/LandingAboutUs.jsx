import React from 'react'
import {
  HStack,
  Box,
  Image,
  Heading,
  Center,
  Grid
} from '@chakra-ui/react'

import ProductsBg from '../../assets/hero-bg.webp'

const LandingAboutUs = () => {
  return (
    <Grid 
    bg='brand.blue' 
    color='white' 
    py={6} 
    position='relative'
    bgGradient='linear(to-b, brand.aquamarinePrimary, brand.blue)'
    >
      {/* <Image 
      src={ProductsBg} 
      alt='imagen de nosotros'
      position='absolute'
      zIndex='1'
      top='0'
      left='0'
      h='100%'
      w='100%'
      objectFit='cover'
      opacity='.2'
       /> */}
      <Heading zIndex='2'>
        <Center textAlign='center'>
        Quienes somos?
        </Center>
      </Heading>
    </Grid>
  )
}

export default LandingAboutUs
