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

import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from '../../components/products/Pagination';

const ProductsPage = () => {
  const [filterProduct, setFilterProduct] = useState(products.AllProducts())
  const specificProducts = JSON.parse(window.localStorage.getItem('filterProduct'))?.product

  useEffect(() => {
    if(specificProducts){
      const selectedProducts = products.filterProducts(specificProducts)
      setFilterProduct(selectedProducts)
      window.localStorage.removeItem('filterProduct')
    }
  },[])

  const handleFilter = (keywords) => {
    if(keywords.productName){
      const inputProducts = products.filterProductsName(keywords.productName)
      if(keywords.newProduct && keywords.newProduct.length > 0){
          const checkBoxFilter = inputProducts.filter((product)=>(product.category === keywords.newProduct[0]))
          setFilterProduct(checkBoxFilter)
        }
        else{
          setFilterProduct(inputProducts)
        }
      }
      else if(!keywords.productName && keywords.newProduct && keywords.newProduct.length > 0){
        const checkBoxFilter = products.filterProducts(keywords.newProduct[0])
        setFilterProduct(checkBoxFilter)
      }
      else{
      setFilterProduct(products.AllProducts())
    }
  }

  return (
    <Grid gridTemplateColumns={['1fr', '1fr', '20% 1fr', '20% 1fr']}     
    marginTop='98px' 
    minHeight='89vh'
    padding={6}    
    bgGradient='linear(to-b, white, brand.aquamarinePrimary)'
    >
      <GridItem>
        <Box>
          Filtrar productos
          <Formik
            initialValues={{
              productName:''
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
        <Box marginTop={8}>
          <Pagination paginationProducts={filterProduct} />
        </Box>
      </GridItem>
    </Grid>
  )
}

export default ProductsPage
