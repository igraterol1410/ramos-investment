import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Center,
    Button,
    Heading,
    Text,
    useDisclosure,
    Image,
    InputGroup,
    Input,
    InputRightElement,
    FormControl,
    FormLabel,
    Box,
    GridItem,
    Grid,
  } from '@chakra-ui/react'

  import ProductImage from '../../../assets/logo.webp'
  import ProductBg from '../../../assets/product-bg4.png'
import { Link } from 'react-router-dom'

const ProductModal = ({product, modal, setModal}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ number, setNumber ] = useState(0)
    const [productList, setProductList] = useState([])
    const requirement = JSON.parse(window.localStorage.getItem('requirement'))

    useEffect(()=>{
        if(modal){
            onOpen()
        }    
        if(requirement){
            setProductList(requirement)   
        }
    },[modal])

    const closeModal = () => {
        setNumber(0)
        setModal()
        onClose()
    }

    const addToCart = (product, number) => {
        setProductList([...productList, {product:product, number:number}])
        window.localStorage.setItem('requirement', JSON.stringify([...productList, {product:product, number:number}]))
    }
  return (
    <Modal
        isOpen={isOpen}
        onClose={closeModal}
        isCentered
        motionPreset='slideInBottom'
        size='lg'
        closeOnOverlayClick={false}
      >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='10%'
          backdropBlur='10px'
        />
        <ModalContent
          ml='1rem'
          mr='1rem'
        >
          <ModalHeader>
          <ModalCloseButton />
          <br/>
          <Center
          bgImage={ProductBg}
          backgroundSize='100%'
          borderRadius={14}>
            {
                product &&
                <Image
                    src={product.images[0] || ProductImage}
                    alt='producto'
                // boxSize='250px'
                    maxWidth='100%'
                    objectFit='contain'
                />
            }
            </Center>
          </ModalHeader>
          <ModalBody>
            <Center marginBottom={4}>
                {
                    product &&
                    <Heading as='h2' size='md'>
                        {product.product}
                    </Heading>
                }
            </Center>
            <Grid gridTemplateColumns='2fr 1fr'>
                <GridItem w='100%'>
                    <Button 
                    w='80%' 
                    borderRadius={50}
                    disabled={number <= 0} 
                    bg='brand.blue' 
                    color='white' 
                    _hover={{
                        color:'brand.aquamarinePrimary'
                    }}
                    onClick={()=>addToCart(product.product, number)}
                    fontSize={['14px','14px','1rem','1rem']}
                    >Añadir a la cotización</Button>    
                </GridItem>
                <GridItem>
                    <FormControl mb={8}>
                        <Center>
                            <InputGroup maxW={500}>
                            <Input type='number' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Cantidad' />
                            </InputGroup>
                        </Center>
                    </FormControl>
                </GridItem>
            </Grid>
            <Center>
                <Link to='/cotizar'>
                    <Button 
                    bg='brand.blue'
                    color='white'
                    _hover={{
                        color:'brand.aquamarinePrimary'
                    }}
                    borderRadius={50}
                    disabled={!requirement}>Terminar cotización</Button>
                </Link>
            </Center>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default ProductModal
