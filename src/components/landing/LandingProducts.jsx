import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HStack,
  Box,
  Image,
  Heading,
  Center,
  Grid,
  GridItem,
  Button
} from '@chakra-ui/react'
import { transform } from 'framer-motion'

import products from '../../components/products/products';

const LandingProducts = () => {
  const history = useNavigate()

  const goTo = (parameter) => {
    console.log(parameter)
    window.localStorage.setItem('filterProduct', JSON.stringify({product:parameter}))
    history('/productos')
  }
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
      gap={8}
      textAlign='center'
      padding={6}
      >
            {
              products.productsServices().map((product,index)=>(
                <GridItem
                  // border='1px solid blue'
                  borderRadius={12}
                  bgGradient='linear(to-t, white, bran.blue)'
                  // bg='white'
                  key={index}
                  _hover={{
                    boxShadow:'-11px 24px 112px -28px rgba(255,255,255,0.47);'
                  }}
                  onClick={()=>goTo(product.action)}
                  >
                  <Grid gridTemplateRows='3fr 1fr 1fr' gap={4} padding={4}>
                    <GridItem>
                      <Box
                      minHeight='150px'
                      w='100%'
                      h='100%'
                      bg='white'
                      borderRadius={12}
                      position='relative'
                      >
                        <Image src={product.images} alt={product.images}
                        w='100%'
                        h='100%'
                        position='absolute'
                        objectFit='cover'
                        opacity={['1','1','.6','.6']}
                        _hover={{
                          opacity:'1'
                        }}
                        />
                      </Box>
                    </GridItem>
                    <GridItem>{product.productTitle}</GridItem>
                    <GridItem>
                      <Button bg='brand.blue' borderRadius={50} w='100%'>Ver {product.productTitle}</Button>
                    </GridItem>
                  </Grid>
                </GridItem>
              ))
            }
      </Grid>
    </Grid>
  )
}

export default LandingProducts
