import React from 'react'
import LandingAboutUs from '../components/landing/LandingAboutUs'
import LandingFooter from '../components/landing/LandingFooter'
import LandingMain from '../components/landing/LandingMain'
import LandingProducts from '../components/landing/LandingProducts'

import {
    Link,
  } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <LandingMain />
      <LandingAboutUs />
      <LandingProducts />
      <LandingFooter />
    </>
  )
}

export default LandingPage
