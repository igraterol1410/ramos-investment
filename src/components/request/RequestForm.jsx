import React, { useState } from 'react'
import {
  Box,
  Center,
  Input,
  Heading,
  Divider,
  Grid, 
  GridItem,
  Button,
  FormLabel
} from '@chakra-ui/react'
import { Formik,Form,Field } from 'formik'

const RequestForm = () => {
    const [productName, setProductName] = useState('')
    const [productNumber, setProductNumber] = useState(0)
    const [productList, setProductList] = useState([])
    let productsSelected = []

    const handleSubmit = (values) => {
        console.log(values, productList)
    }
    const setProducts = () => {
        console.log(productName, productNumber)
        setProductList([...productList, {product:productName, number:productNumber}])
        setProductName('')
        setProductNumber(0)
    }
  return (
    <Center marginTop={6}>
        <Box w={['90%','90%','60%' ,'60%']}>
            <Formik
            initialValues={{
                name:''
            }}
            validate={(values)=>{
                console.log(values)
            }}
            onSubmit={handleSubmit}
            >
                {({values})=>(
                    <Form>
                        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2}>
                            <GridItem>
                                <FormLabel>Indicanos tu nombre</FormLabel>
                                <Field 
                                as={Input}
                                focusBorderColor='#19a4b0'
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Nombre'
                                />                        
                            </GridItem>
                            <GridItem>
                                <FormLabel>Correo</FormLabel>
                                <Field 
                                as={Input}
                                focusBorderColor='#19a4b0'
                                type='text'
                                id='email'
                                name='email'
                                placeholder='Correo'
                                />                        
                            </GridItem>
                        </Grid>
                        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2}>
                            <GridItem>
                                <FormLabel>Número de teléfono</FormLabel>
                                <Field 
                                as={Input}
                                focusBorderColor='#19a4b0'
                                type='text'
                                id='phoneNumber'
                                name='phoneNumber'
                                placeholder='prueba'
                                />                        
                            </GridItem>
                        </Grid>

                        <Divider marginBottom={4} marginTop={4} />

                        <Box w='100%'>
                            {
                                productList && productList.map((product)=>(
                                    <Box 
                                    w='100%' 
                                    py={2} 
                                    px={4}
                                    bg='#19a4b0'
                                    color='white'
                                    marginBottom={2}
                                    borderRadius={8}>
                                        {product.product} - {product.number}</Box>
                                ))
                            }
                        </Box>

                        <Grid w='100%' templateColumns='4fr 1fr 1fr' gap={4} alignItems='center' justifyContent='center'>
                            <GridItem>
                                <FormLabel>Producto</FormLabel>
                                <Field 
                                as={Input}
                                focusBorderColor='#19a4b0'
                                type='text'
                                id='productItem'
                                name='productItem'
                                placeholder='Nombre del producto'
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                />  
                            </GridItem>
                            <GridItem>
                                <FormLabel>Cantidad</FormLabel>
                                <Field 
                                as={Input}
                                focusBorderColor='#19a4b0'
                                type='number'
                                id='productsNumber'
                                name='productsNumber'
                                placeholder='prueba'
                                value={productNumber}
                                onChange={(e) => setProductNumber(e.target.value)}
                                />  
                            </GridItem>
                            <GridItem alignSelf='end'>
                                <Button
                                bg='#19a4b0' 
                                color='white' 
                                w='100%' 
                                marginTop={4}
                                _hover={{
                                    bg:'#17a6bf'
                                }} 
                                onClick={setProducts}>Añadir</Button> 
                            </GridItem>
                        </Grid>


                        <Button 
                        bg='#19a4b0' 
                        color='white' 
                        w='100%' 
                        marginTop={4}
                        _hover={{
                            bg:'#17a6bf'
                        }}
                        type='submit'
                        >Solicitar cotización</Button>                        
                    </Form>
                )}
            </Formik>
        </Box>
    </Center>
  )
}

export default RequestForm
