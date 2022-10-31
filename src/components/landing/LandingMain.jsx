import React from 'react'
import {
    HStack,
    Box,
    Image,
    Heading,
    Center
  } from '@chakra-ui/react'
  // import Waves from '../../assets/waves2.svg'
  import Waves from '../../assets/hero-bg.webp'

import HeroImage from '../../assets/hero-image.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const LandingMain = () => {
  return (
    <HStack marginTop='98px' spacing='1rem' boxSizing='border-box' height='90vh' w='100%' marginLeft='auto' marginRight='auto' position='relative'>
        {/* <Box w='50%' h='100%'> */}
      <Image src={Waves} position='absolute' w='100%' h='100%' left='0' zIndex='-1' opacity='.4' />
        <Swiper 
        modules={[Autoplay, Pagination, Navigation]} 
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}>
        <SwiperSlide>
          <Center>
              <Image src={HeroImage} alt='logo de inversiones ramos' w='100%' />
          </Center>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Center>Titulo 2
          </Center>
        </SwiperSlide>
        <SwiperSlide>
          <Center>
              <Heading>Titulo 3</Heading>
          </Center>
        </SwiperSlide> */}
      </Swiper>
    </HStack>
  )
}

export default LandingMain
