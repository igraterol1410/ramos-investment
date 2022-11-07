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
  Button,
  Text
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { transform } from 'framer-motion'

import ProductBg from '../../assets/product-bg5.png'

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
                  bgImage={ProductBg}
                  bgSize='100%'
                  // bg='white'
                  key={index}
                  _hover={{
                    boxShadow:'-11px 24px 112px -28px rgba(255,255,255,0.47);'
                  }}
                  onClick={()=>goTo(product.action)}
                  >
                  <Grid gridTemplateColumns={['1fr', '1fr','1fr 1fr','1fr 1fr']} gap={4} padding={4}>
                    <GridItem>
                      <Box
                      minHeight='150px'
                      w='100%'
                      h='100%'
                      position='relative'
                      >
                        <Image src={product.images} alt={product.images}
                        borderRadius={12}
                        w='100%'
                        h='100%'
                        position='absolute'
                        objectFit='cover'
                        />
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Text>
                      {product.productTitle}
                      </Text>
                      <Button bg='brand.aquamarinePrimary' borderRadius={50} w='100%'><SearchIcon marginRight={4} /> Ver {product.productTitle}</Button>
                    </GridItem>
                    {/* <GridItem>
                    </GridItem> */}
                  </Grid>
                </GridItem>
              ))
            }
      </Grid>
    </Grid>
  )
}

export default LandingProducts
