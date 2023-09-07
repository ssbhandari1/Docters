import { CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import sr1 from '../assets/sr1.png'
import sr2 from '../assets/sr2.png'
import sr3 from '../assets/sr3.png'
import sr4 from '../assets/sr4.png'


const OurServices = () => {
  return (
   <div className="ourServices">
    <h1>Our Services</h1>
    <p>"घर बैठे हमारी सेवाओं का लाभ उठाएं  - भागदौड़ और परेशानियों से मुक्ति पाएं!"</p>
  <div className="serviceDetails">
    <Paper elevation={15} sx={{width:270,height:270,display:'flex',flexDirection:'column',justifyContent:'center',gap:'1rem',alignItems:'center' ,cursor:'pointer',padding:'0 2rem',transition:'all 0.3s ease-in-out','&:hover': { backgroundColor:"lightskyblue"}  }}>
    <CardMedia
                  component="img"
                  sx={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  image={sr1}
                  alt="services"
                />
                <Typography variant='h6' sx={{fontWeight:'600'}}>Docter Appointment</Typography>
                <Typography variant='' sx={{textAlign:'center',fontSize:'.91rem',lineHeight:'1.3rem'}}>घर बैठे कॉल से अपॉइंटमेंट बुक करने की सुविधा!</Typography>

    </Paper>
    <Paper elevation={15} sx={{width:270,height:270,display:'flex',flexDirection:'column',justifyContent:'center',gap:'1rem',alignItems:'center' ,cursor:'pointer',padding:'0 2rem',transition:'all 0.3s ease-in-out','&:hover': { backgroundColor:"lightskyblue"}}}>
    <CardMedia
                  component="img"
                  sx={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  image={sr2}
                  alt="services"
                />
                <Typography variant='h6' sx={{fontWeight:'600'}}>Medicine Delivery</Typography>
                <Typography variant=''sx={{textAlign:'center',fontSize:'.91rem',lineHeight:'1.3rem'}}>
घर बैठे डॉक्टर द्वारा लिखी गई दवा प्राप्त करने की सुविधा!</Typography>

    </Paper>
    <Paper elevation={15} sx={{width:270,height:270,display:'flex',flexDirection:'column',justifyContent:'center',gap:'1rem',alignItems:'center' ,cursor:'pointer',padding:'0 2rem',transition:'all 0.3s ease-in-out','&:hover': { backgroundColor:"lightskyblue"}}}>
    <CardMedia
                  component="img"
                  sx={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  image={sr3}
                  alt="services"
                />
                <Typography variant='h6' sx={{fontWeight:'600'}}>Pathology Service</Typography>
                <Typography variant=''sx={{textAlign:'center',fontSize:'.91rem',lineHeight:'1.3rem'}}>
             
घर बैठे देश के प्रतिष्ठित लैब द्वारा जांच के लिए सैंपल कलेक्शन की सुविधा!</Typography>

    </Paper>
    
    <Paper elevation={15} sx={{width:270,height:270,display:'flex',flexDirection:'column',justifyContent:'center',gap:'1rem',alignItems:'center' ,cursor:'pointer',padding:'0 2rem',transition:'all 0.3s ease-in-out','&:hover': { backgroundColor:"lightskyblue"}}}>
    <CardMedia
                  component="img"
                  sx={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  image={sr4}
                  alt="services"
                />
                <Typography variant='h6' sx={{fontWeight:'600'}}>Other Service</Typography>
                <Typography variant='' sx={{textAlign:'center',fontSize:'.91rem',lineHeight:'1.3rem'}}>
             
                CT - Scan, X-ray, MRI Ultrasonography (Ultrasound) के लिए जानकारी और बुकिंग।</Typography>

    </Paper>

  </div>
   </div>
  )
}

export default OurServices
