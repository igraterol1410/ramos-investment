import React from 'react'
import {
  HStack,
  Box,
  Image,
  Heading,
  Center,
  Grid,
  GridItem
} from '@chakra-ui/react'

const LandingProducts = () => {
  return (
    <Grid 
    // color='brand.blue' 
    py={6}
    bgGradient='linear(to-b, brand.blue, brand.aquamarinePrimary)'
    color='white'
    >
      <Heading>
        <Center textAlign='center'>
        Productos
        </Center>
      </Heading>
      <Grid
      gridTemplateColumns={['1fr', '1fr','1fr 1fr','1fr 1fr']}
      gap={4}
      textAlign='center'
      padding={6}
      >
        <GridItem
        border='1px solid blue'
        borderRadius={50}
        >Productos de limpieza</GridItem>
        <GridItem
        border='1px solid blue'
        borderRadius={50}
        >Bolsas plásticas</GridItem>
        <GridItem
        border='1px solid blue'
        borderRadius={50}
        >Papelería institucional</GridItem>
        <GridItem
        border='1px solid blue'
        borderRadius={50}
        >Papelería en general</GridItem>
        <GridItem
        border='1px solid blue'
        borderRadius={50}
        >Víveres en general</GridItem>
      </Grid>
    </Grid>
  )
}

export default LandingProducts
