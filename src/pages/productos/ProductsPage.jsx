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
    <Box marginTop='98px' spacing='1rem' boxSizing='border-box' height='90vh' padding={6}>
      <Center>
        <Heading as='h2'>Productos</Heading>
      </Center>
      <Center marginTop={8}>
        <Grid w={['100%', '100%', '100%', '80%']} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(3, 1fr)']} gap={6}>
          {
            products.AllProducts() && products.AllProducts().map((product)=>(
              <GridItem key={product.id} >
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'py={4}>
                  <Center>
                    <Image w='300px' h='300px' objectFit='contain' src={product.images[0] || ProductoImage} />
                  </Center>
                  <Center>
                    {product.product}
                  </Center>
                  <Center>
                    <Button zIndex='-1'>Ver</Button>
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
