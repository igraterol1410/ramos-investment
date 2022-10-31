import React from 'react'
import {
  Link,
} from "react-router-dom";
import { 
  Flex, 
  Image, 
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption, 
  IconButton,
  Center,
  Grid
} from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, ExternalLinkIcon,RepeatIcon } from '@chakra-ui/icons'

//IMÁGENES
import Logo from '../../assets/logo-3.webp'

const LandingHeader = () => {

  const menuItems = [
    {
      title:'Inicio',
      link:'/'
    },
    {
      title:'Productos',
      link:'/productos'
    },
    {
      title:'Cotizar',
      link:'/cotizar'
    }
  ]
  return (
    <Flex 
    position='fixed' 
    top='0' 
    left='0' 
    w='100%' 
    justifyContent='space-between' 
    alignItems='center' 
    py='1.5rem' 
    px='2rem'
    bg='white'>

      <Link to='/'>
        <Image 
        h='50px' 
        src={Logo} 
        alt='Logo de Inveriones Ramos' 
        />
      </Link>

      <Flex 
      w={['100%', '100%','50%', '50%']}
      justifyContent='space-around' 
      h='50px' 
      alignContent='center'
      display={['none', 'none', 'flex', 'flex']}
      >
        {
          menuItems && menuItems.map((item,index)=>(
            <Link key={index} style={{height:'100%', width:'100%', borderRadius:'12px'}} to={item.link}>
              <Grid 
                h='100%' 
                w='100%'
                alignItems='center'
                justifyContent='center'
                padding='0'
                borderRadius={8}
                _hover={{
                    bg:'#19a4b0',
                    color: 'white',
                    fontWeight:'bold'
                  }}>
                    {item.title}
                </Grid>
            </Link>
          ))
        }
      </Flex>
      <Box
        display={['block', 'block', 'none', 'none']}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            {
              menuItems && menuItems.map((item)=>(
                <MenuItem>
                  <Link style={{height:'100%',width:'100%'}} to={item.link}>{item.title}</Link>
                </MenuItem>
              ))
            }
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default LandingHeader