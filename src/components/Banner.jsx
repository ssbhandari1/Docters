import React from 'react'
import './style.scss'
import { CardMedia } from '@mui/material'
import hmd_banner0 from '../assets/hmd_banner0.jpg'
const Banner = () => {
  return (
    <div className='homeBanner'>
           <CardMedia
                  component="img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  image={hmd_banner0}
                  alt="services"
                />
    </div>
  )
}

export default Banner