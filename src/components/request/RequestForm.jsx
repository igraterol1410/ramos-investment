import React, { useEffect, useState } from 'react'
import {
  Box,
  Center,
  Input,
  Heading,
  Divider,
  Grid, 
  GridItem,
  Button,
  FormLabel,
  Text,
  useToast,
  Spinner
} from '@chakra-ui/react'
import { Formik,Form,Field } from 'formik'
import emailjs from '@emailjs/browser';

const RequestForm = () => {
    const toast = useToast()
    const [productName, setProductName] = useState('')
    const [productNumber, setProductNumber] = useState(0)
    const [productList, setProductList] = useState([])    
    const [disabledButton, setDisabledButton] = useState(true)    
    const [refresh, setRefresh] = useState(true)    
    const [loading, setLoading] = useState(false)    
    const requirement = JSON.parse(window.localStorage.getItem('requirement'))

    useEffect(()=>{
        if(requirement){
            setProductList(requirement)
        }else{
            setProductList([])
        }
    },[refresh])

    const arrayToHtml = (array) => {
        return `<table>
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
        </tr>
        ${array.map((item,index)=>(
            `<tr key=${index}>
                <td>${item.product}</td>
                <td style="text-align:center;">${item.number}</td>
            </tr>`
        ))}
        </table>`
    }

    const handleSubmit = (values) => {
        setLoading(true)
        setDisabledButton(true)
        const sendRequirement ={
            name: values.name,
            email:values.email,
            phone:values.phoneNumber,
            my_html:arrayToHtml(productList)
        }
        emailjs.send('service_nfus5tv', 'template_a9rh8jb', sendRequirement, 'GFEbDeNcn4uuXN3Uu')
      .then((result) => {
        toast({
            title: 'Cotización enviada',
            description: `Tu cotización será enviada al correo ${values.email}`,
            status: 'success',
            duration: 9000,
            position:'top'
          })
          window.localStorage.removeItem('requirement')
          setRefresh(!refresh)
          setLoading(false)
          setDisabledButton(false)
        }, (error) => {
            setLoading(false)
            setDisabledButton(false)
          console.log(error.text);
      });
    }
    const setProducts = () => {
        setProductList([...productList, {product:productName, number:productNumber}])
        window.localStorage.setItem('requirement', JSON.stringify([...productList, {product:productName, number:productNumber}]))
        setProductName('')
        setProductNumber(0)
    }

    const handleRemoveProduct = (product) => {
        const index = productList.indexOf(product)
        const newArray = [...productList]
        newArray.splice(index, 1)
        window.localStorage.setItem('requirement', JSON.stringify(newArray))
        setProductList(newArray)
    }

  return (
    <Center marginTop={6}>
        {
            loading &&
            <Spinner/>
        }
        <Box w={['90%','90%','60%' ,'60%']}>
            <Formik
            initialValues={{
                name:'',
                email:'',
                phoneNumber:''
            }}
            validate={(values)=>{
                if(!values.name || !values.email){
                    setDisabledButton(true)
                }else{
                    setDisabledButton(false)
                }
            }}
            onSubmit={handleSubmit}
            >
                {({values,resetForm})=>(
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
                                type='email'
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
                                placeholder='Ingresa un teléfono'
                                />                        
                            </GridItem>
                        </Grid>

                        <Divider marginBottom={4} marginTop={4} />

                        <Box w='100%'>
                            <Center>
                                <Text fontSize='2xl'>Lista de productos</Text>
                            </Center>
                            <Grid
                            gridTemplateColumns='2fr 2fr 1fr'
                            w='100%' 
                            py={2} 
                            px={4}
                            bg='#19a4b0'
                            color='white'
                            marginBottom={2}
                            borderRadius={8}>
                                <GridItem>Producto</GridItem>
                                <GridItem>Cantidad</GridItem>
                                <GridItem>Acción</GridItem>
                            </Grid>
                            {
                                productList && productList.map((product)=>(
                                    <Grid 
                                    gridTemplateColumns='2fr 2fr 1fr'
                                    gap={4}
                                    alignContent='center'
                                    alignItems='center'
                                    w='100%' 
                                    py={2} 
                                    px={4}
                                    bg='#19a4b0'
                                    color='white'
                                    marginBottom={2}
                                    borderRadius={8}>
                                        <GridItem>
                                            {product.product}
                                        </GridItem>
                                        <GridItem>
                                            {product.number}
                                        </GridItem>
                                        <GridItem
                                        border='1px solid white'
                                        borderRadius={8}
                                        _hover={{
                                            cursor:'pointer',
                                            bg:'white',
                                            color:'brand.aquamarinePrimary'
                                        }}
                                        onClick={() => handleRemoveProduct(product)}>
                                            <Center>
                                                Eliminar
                                            </Center>
                                        </GridItem>
                                    </Grid>
                                ))
                            }
                            {
                                productList.length === 0 &&
                                <Grid 
                                    gridTemplateColumns='1fr'
                                    w='100%' 
                                    py={2} 
                                    px={4}
                                    bg='#19a4b0'
                                    color='white'
                                    marginBottom={2}
                                    borderRadius={8}>
                                        <GridItem>
                                           Añade productos
                                        </GridItem>
                                    </Grid>
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
                                onClick={setProducts}
                                disabled={productNumber <= 0 || !productName}>Añadir</Button> 
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
                        disabled={disabledButton}
                        >Solicitar cotización</Button>                        
                    </Form>
                )}
            </Formik>
        </Box>
    </Center>
  )
}

export default RequestForm
