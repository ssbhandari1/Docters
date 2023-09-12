import { CardMedia, Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import sr1 from '../assets/sr1.png'
import sr2 from '../assets/sr2.png'
import sr3 from '../assets/sr3.png'
import sr4 from '../assets/sr4.png'
import CancelIcon from '@mui/icons-material/Cancel';
 import doctor from '../assets/about/login-popup-doctor.png'

const teamsData=[
  {id:'A',name:'Dr. ABHAY PANDEY',position:'Founder',img:doctor,contact:'9857643892'},
  {id:'B',name:'Dr. Ajay PANDEY',position:'Founder',img:doctor,contact:'6457643892'},
  {id:'C',name:'Dr. Rohit PANDEY',position:'Founder',img:doctor,contact:'8957643892'},
  { id:'D',name:'Dr. Mohit PANDEY',position:'Founder',img:doctor,contact:'7857643892'},
]
const OurServices = () => {
  const [selectDocter,setSelectDocter]=useState([teamsData[0]])
  console.log(selectDocter)
const[dailog,setDialog]=useState(false)

const handleOpenDialog=()=>{

  setDialog(true)
}

const handleClose=()=>{
  setDialog(false)
}


const handleSlectDoc=(index)=>{
  setSelectDocter([teamsData[index]])

}
  return (
   <div className="ourServices">
    <h1>Our Services</h1>
    <p>"घर बैठे हमारी सेवाओं का लाभ उठाएं  - भागदौड़ और परेशानियों से मुक्ति पाएं!"</p>
  <div className="serviceDetails">
    <Paper elevation={15} sx={{width:270,height:270,display:'flex',flexDirection:'column',justifyContent:'center',gap:'1rem',alignItems:'center' ,cursor:'pointer',padding:'0 2rem',transition:'all 0.3s ease-in-out','&:hover': { backgroundColor:"lightskyblue"}  }}
     onClick={handleOpenDialog}
    >
    <CardMedia
                  component="img"
                  sx={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  image={sr1}
                  alt="services"
                
                />
                <Typography variant='h6' sx={{fontWeight:'600'}}>Doctor Appointment</Typography>
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
  <Dialog  open={dailog} className='doc'>
<CancelIcon sx={{position:'absolute',cursor:'pointer'}} onClick={handleClose}/>
      <DialogTitle sx={{textAlign:'center',fontWeight:'bold'}}>Doctor Appointment</DialogTitle>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">District</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
      label="District"
     >
      {
        teamsData.map((team,index)=>{
          return(
            <MenuItem key={index} value={index} onClick={()=>handleSlectDoc(index)}>{team.id}</MenuItem>

          )
        })
      }
     
      </Select>
    </FormControl>


{
  selectDocter.map((doc,index)=>{
    return(
      <Paper key={index}  elevation={10} className='doctercontact' >
      <CardMedia
                component="img"
                sx={{ width:200, height: 200, objectFit: 'cover' }}
                image={doc.img}
                alt="about"
              /> 
              <Typography sx={{fontSize:'1.1rem',fontWeight:'550'}} >{doc.name}</Typography>
              <Typography sx={{fontWeight:'500'}} >{doc.contact}</Typography>

      </Paper>
    )
  })
}

   
      </Dialog>
   </div>
  )
}

export default OurServices
