import React, { useEffect } from 'react'
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
  } from '@chakra-ui/react'

  import ProductImage from '../../../assets/logo.webp'

const ProductModal = ({product, modal, setModal}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        if(modal){
            onOpen()
        }        
    },[modal])

    const closeModal = () => {
        setModal()
        onClose()
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
          <Center>
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
            <Center>
                {
                    product &&
                    <Heading as='h2' size='md'>
                        {product.product}
                    </Heading>
                }
            </Center>
            <Center>
              <Text fontSize='sm'>
                hola
              </Text>
            </Center>
            <Center marginBottom={4}>
                <Button>Cotizar</Button>
            </Center>
            <Center>
                <Button>Terminar cotización</Button>
            </Center>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default ProductModal
