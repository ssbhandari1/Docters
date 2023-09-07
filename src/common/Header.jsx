import React, { useState } from 'react'
import './style.scss'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBars
} from "react-icons/fa";
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, SwipeableDrawer } from '@mui/material'
import {  useNavigate } from 'react-router-dom';
const Header = () => {
  const[toggle,setToggle]=useState(false)

  const toggleDrawer =()=>{
   
    setToggle(!toggle)
  }

const navigate=useNavigate()
  const pages=['Home','About','Team','Gallery','Contact']
  
  const handleNavigate=(type)=>{

if(type==='Home'){
  navigate('/')
}else if(type==='About'){
  navigate('/about')
}else if(type==='Team'){
  navigate('/services')
}else if (type==='Gallery'){
  navigate('/gallery')
}else if(type==='Contact'){
  navigate('contact')
}
  }
  
  return (
    <header className={`header`}>
      <nav className={`nav`}>
        <h4>Call Center Number - 9199599591(Timing - 6AM - 10AM)</h4>
        <Stack className='headerIcon' direction='row' sx={{gap:'1rem'}}> 
        <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
        </Stack>
      </nav>
      <div className="navSection">
        <Stack className='navStack' direction='row' justifyContent={'center'} >
         
         {
          pages.map((item,index)=>{
            return(
              <Button variant='' key={index} sx={{color:'gray',fontSize:'1.1rem'}} onClick={()=>handleNavigate(item)}>{item}</Button>

            )
          })
         }
        </Stack>
        <FaBars className='menubaar'  onClick={toggleDrawer}/>
        <SwipeableDrawer
          anchor="right"
            open={toggle}
            onClose={()=>{setToggle(false)}}
            onOpen={()=>{setToggle(true)}}
            PaperProps={{
              style: {
                // marginTop:'3.5rem'
               // height: '400px', // Set your desired height here
              },
            }}
            style={{ zIndex: 1000 }}
          >
          <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={()=>setToggle(false)}
      onKeyDown={()=>setToggle(false)}
    >
      <List>
    {
      pages.map((page,index)=>{
        return(
          <>
          <ListItem key={index} onClick={()=>handleNavigate(page)} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               
             
              </ListItemIcon>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
          <Divider />
          </>
        )
      })
    }
          

         
        
         
      </List>
    
   
    </Box>
          </SwipeableDrawer>
      </div>
    </header>
  )
}

export default Header