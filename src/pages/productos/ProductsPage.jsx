import React from 'react'
  import {
    Box,
    Center,
    Heading,
    Image,
    Grid, 
    GridItem,
    Button
  } from '@chakra-ui/react'

import products from '../../components/products/products';

import ProductoImage from '../../assets/productos/prueba.svg'

const ProductsPage = () => {
  return (
    <Box 
    marginTop='98px' 
    padding={6}    
    bgGradient='linear(to-b, white, brand.aquamarinePrimary, brand.blue)'
    >
      <Center>
        <Heading as='h2'>Productos</Heading>
      </Center>
      <Center marginTop={8}>
        <Grid 
        w={['100%', '100%', '100%', '80%']} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(3, 1fr)']} 
        gap={6}>
          {
            products.AllProducts() && products.AllProducts().map((product)=>(
              <GridItem key={product.id} >
                <Box 
                maxW='sm' 
                borderWidth='1px' 
                borderRadius='lg' 
                overflow='hidden'
                py={4}
                position='relative'
                >
                  <Center>
                    {/* <Image 
                    w='100%' 
                    h='100%' 
                    objectFit='cover' 
                    src={product.images[0] || ProductoImage} 
                    position='absolute'
                    top='0'
                    left='0'
                    opacity='.1'
                    /> */}
                    <Image 
                    w='300px' 
                    h='300px' 
                    objectFit='contain' 
                    src={product.images[0] || ProductoImage}
                    zIndex='2'
                    />
                  </Center>
                  <Center>
                    {product.product}
                  </Center>
                  <Center>
                    <Button bg='brand.blue' color='white' w='80%'>Ver</Button>
                  </Center>
                </Box>
              </GridItem>
            ))
          }
        </Grid>
      </Center>
    </Box>
  )
}

export default ProductsPage
