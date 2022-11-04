import React from 'react'
  import {
    Box,
    Center,
    Heading,
    Image,
    Grid, 
    GridItem,
    Button,
    FormLabel,
    Input,
    Checkbox,
    Flex
  } from '@chakra-ui/react'
  
import { Formik,Form,Field } from 'formik'

import products from '../../components/products/products';

import ProductoImage from '../../assets/productos/prueba.svg'

import { useEffect } from 'react';
import { useState } from 'react';

const ProductsPage = () => {
  const [filterProduct, setFilterProduct] = useState([])
  const specificProducts = JSON.parse(window.localStorage.getItem('filterProduct'))?.product

  useEffect(() => {
    const selectedProducts = products.filterProducts(specificProducts)
    setFilterProduct(selectedProducts)
  },[])

  const handleFilter = (keywords) => {
    if(keywords.productName || keywords.newProduct[0]){
      if(keywords.productName){
        const inputProducts = products.filterProductsName(keywords.productName)
        const checkBoxFilter = inputProducts.filter((product)=>(product.category === keywords.newProduct))
        setFilterProduct(checkBoxFilter)
      }
      else if(keywords.newProduct){
        const checkBoxFilter = products.AllProducts().filter((product)=>(product.category === keywords.newProduct[0]))
        setFilterProduct(checkBoxFilter)
      }
    }
    else{
      setFilterProduct(products.AllProducts())
    }
  }

  return (
    <Grid gridTemplateColumns={['1fr', '1fr', '20% 1fr', '20% 1fr']}     
    marginTop='98px' 
    padding={6}    
    bgGradient='linear(to-b, white, brand.aquamarinePrimary, brand.blue)'>
      <GridItem>
        <Box>
          Filtrar productos
          <Formik
            initialValues={{
              newProduct:['food']
            }}
            validate={(values)=>{
                handleFilter(values)
            }}
            onSubmit={()=>{}}
            enableReinitialize
            >
                {({values})=>(
                    <Form>
                        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)']} gap={2}>
                            <GridItem>
                                <Field 
                                as={Input}
                                focusBorderColor='#19a4b0'
                                type='text'
                                id='productName'
                                name='productName'
                                placeholder='Producto'
                                />                        
                            </GridItem>
                        </Grid>  
                        <Box
                        marginTop={4} 
                        marginBottom={2} 
                        >
                          Tipos de Productos</Box>
                          <Grid 
                          role="group" 
                          aria-labelledby="checkbox-group" 
                          alignContent='center' 
                          gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr', '1fr']} 
                          fontSize={16}
                          gap={2}
                          >
                          {
                            products.productsServices().map((offerProduct, index)=>(
                              <GridItem 
                              key={index}
                              borderRadius={4}
                              >
                                <FormLabel>
                                  <Flex gap={2}>
                                    <Field 
                                    as={Checkbox} 
                                    type="checkbox" 
                                    name="newProduct" 
                                    value={offerProduct.action}
                                    size='lg' 
                                    colorScheme='green'
                                    />
                                    {offerProduct.productTitle}
                                  </Flex>
                                </FormLabel>
                              </GridItem>
                            ))
                          }
                          </Grid>                
                    </Form>
                )}
            </Formik>
        </Box>
      </GridItem>
      <GridItem
      >
        <Center>
          <Heading as='h2'>Productos</Heading>
        </Center>
        <Center marginTop={8}>
          <Grid 
          w={['100%', '100%', '100%', '90%']} 
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(3, 1fr)']} 
          gap={6}>
            {
              filterProduct && filterProduct.map((product)=>(
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
      </GridItem>
    </Grid>
  )
}

export default ProductsPage
