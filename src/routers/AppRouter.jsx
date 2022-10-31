import React, { lazy, Suspense, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import LandingHeader from '../components/landing/LandingHeader';
import RequestPage from '../pages/cotizar/RequestPage';
import LandingPage from '../pages/LandingPage';
import ProductsPage from '../pages/productos/ProductsPage';

const AppRouter = () => {
  return (
    <>
      <Router>
        <LandingHeader/>
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/cotizar" element={<RequestPage />} />
          </Routes>
      </Router>
    </>
  )
}

export default AppRouter
