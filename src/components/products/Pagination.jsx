import React, {useState, useEffect} from 'react'
import { Box, Button, Center, Grid, GridItem, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate';



import ProductoImage from '../../assets/logo.webp'
import ProductoBg from '../../assets/product-bg5.png'
import ProductModal from './modals/ProductModal';

const Pagination = ({ paginationProducts }) => {
    const history = useNavigate()
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [modal, setModal] = useState(false);
    const [productModal, setProductModal] = useState(null)
    const itemsPerPage = 9;

    let pagBox = document.getElementsByClassName('pagination')
    let links = document.getElementsByClassName('page-num')
    let actBox = document.getElementsByClassName('active')
    
    const setStyles = () => {
        pagBox[0].style.cssText=`
        margin-top: 2rem;
        list-style:none;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        gap:1rem;
        color:white;
        font-size:1.2rem;
        `;

        actBox[0].style.cssText=`
        border-radius:8px;
        background:white;
        color:#189ab7;
        padding: 5px 15px;
        `;
    }
    
    useEffect(() => {
        setTimeout(() => {
            setStyles()
        }, 1000);
        const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(paginationProducts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(paginationProducts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, paginationProducts]);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % paginationProducts.length;
      setItemOffset(newOffset);
    };

    const handleModal = (product) => {
        setProductModal(product)
        setModal(true)
    }
  
    return (
      <>
        <Grid 
          w={['100%', '100%', '100%', '90%']} 
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(3, 1fr)']} 
          gap={6}>
            {
              currentItems && currentItems.map((product)=>(
                <GridItem key={product.id}>
                  <Box 
                  maxW='sm'                      
                  boxShadow='-4px 7px 18px -5px rgba(0,0,0,0.53)'
                  h='100%'
                  borderWidth='1px' 
                  bg='white'
                  borderRadius='lg'
                  overflow='hidden'
                  py={4}
                  px={2}
                  position='relative'
                  >
                    <Center
                    bg='gray.100'
                    bgImage={ProductoBg}
                    backgroundSize='100%'
                    borderRadius={12}>
                      <Image 
                      w='300px' 
                      h='300px' 
                      objectFit='contain' 
                      src={product.images[0] || ProductoImage}
                      zIndex='2'
                      />
                    </Center>
                    <Center 
                    // fontWeight='bold'
                    color='brand.aquamarinePrimary'
                    padding='1rem'
                    textAlign='center'
                    >
                      {product.product}
                    </Center>
                    <Center>
                      <Button 
                      borderRadius={50} 
                      border='3px solid #189ab7'
                      bg='brand.blue' 
                      color='white' 
                      w='80%' 
                      _hover={{
                        color:'brand.aquamarinePrimary'
                      }}
                      onClick={()=>handleModal(product)}>Ver</Button>
                    </Center>
                  </Box>
                </GridItem>
              ))
            }
                <GridItem>
                  <Box 
                  maxW='sm'                      
                  boxShadow='-4px 7px 18px -5px rgba(0,0,0,0.53)'
                  h='100%'
                  borderWidth='1px' 
                  bg='white'
                  borderRadius='lg'
                  overflow='hidden'
                  py={4}
                  px={2}
                  position='relative'
                  >
                    <Center
                    bg='gray.100'
                    borderRadius={12}>
                      <Image 
                      w='300px' 
                      h='300px' 
                      objectFit='contain' 
                      src={ProductoImage}
                      zIndex='2'
                      />
                    </Center>
                    <Center 
                    fontWeight='bold'
                    color='brand.aquamarinePrimary'
                    padding='1rem'
                    textAlign='center'
                    >
                      ¿No encuentras el producto que buscas?
                    </Center>
                    <Center>
                      <Button bg='brand.blue' color='white' w='80%' onClick={()=>history('/cotizar')}>Solicitar</Button>
                    </Center>
                  </Box>
                </GridItem>
        </Grid>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
        <ProductModal product={productModal} modal={modal} setModal={()=>setModal(false)} />
      </>
    );
  }

export default Pagination
