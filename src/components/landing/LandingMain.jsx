import React from 'react'
import {
    HStack,
    Box,
    Image,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Waves from '../../assets/waves2.svg'

import HeroImage from '../../assets/hero-image.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const LandingMain = () => {
  return (
    <HStack marginTop='98px' spacing='1rem' boxSizing='border-box' height='90vh' w='80%' marginLeft='auto' marginRight='auto'>
      <Image src={Waves} position='absolute' w='100%' left='0' zIndex='-1' />
        {/* <Box w='50%' h='100%'> */}
        <Swiper 
        modules={[Autoplay, Pagination, Navigation]} 
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}>
        <SwiperSlide>
          <Center>
            <Box>
              <Heading>Titulo 1</Heading>
            </Box>
          </Center>
        </SwiperSlide>
        <SwiperSlide>
          <Center>
            <Box>
              <Heading>Titulo 2</Heading>
            </Box>
          </Center>
        </SwiperSlide>
        <SwiperSlide>
          <Center>
            <Box>
              <Heading>Titulo 3</Heading>
            </Box>
          </Center>
        </SwiperSlide>
      </Swiper>
    </HStack>
  )
}

export default LandingMain
