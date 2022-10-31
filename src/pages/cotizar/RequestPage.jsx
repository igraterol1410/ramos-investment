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
import {
    Link,
  } from "react-router-dom";
import RequestForm from '../../components/request/RequestForm';

const RequestPage = () => {
  return (
    <Box marginTop='98px' spacing='1rem' boxSizing='border-box' height='90vh' padding={6}>
      <Center>
        <Heading as='h2'>Cotizar</Heading>
      </Center>
      <RequestForm />
    </Box>
  )
}

export default RequestPage