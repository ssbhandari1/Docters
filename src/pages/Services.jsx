import { CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import doctor from '../assets/about/login-popup-doctor.png'
const Services = () => {

const TeamsData=[
  {name:'ABHAY PANDEY',position:'Founder',img:doctor},
  {name:'ABHAY PANDEY',position:'Founder',img:doctor},
  {name:'ABHAY PANDEY',position:'Founder',img:doctor},
  {name:'ABHAY PANDEY',position:'Founder',img:doctor},
  {name:'ABHAY PANDEY',position:'Founder',img:doctor},
]



  return (
    <div className="aboutContainer">
     <div className="teamBanner">
      <div className="Admin">
        <Paper elevation={10} className='adminImg'>
        <CardMedia
                  component="img"
                  sx={{ width:'100%', height: '100%', objectFit: 'cover' }}
                  image={doctor}
                  alt="about"
                /> 
        </Paper>
        <div className="adminAddress">
          <h2>Dr. Vinod sharma</h2>
          <p>Cardiologists Specialist</p>
          <p>V-504,5th floor ,homes 121,sec-121 Noida 201302</p>
          <p>921345769 </p>


        </div>
     
      </div>
     </div>
     <div className="ourTeam">
      <h2>Meet Our Team</h2>
     <div className="testimonial">
    {
      TeamsData.map((team,index)=>{
        return(
          <Paper key={index} elevation={10} sx={{width:250,height:300,textAlign:'center',}}>
          <CardMedia
                    component="img"
                    sx={{ width:250, height: 250, objectFit: 'cover' }}
                    image={team.img}
                    alt="about"
                  /> 
                  <Typography sx={{fontSize:'1.1rem',fontWeight:'550'}} >{team.name}</Typography>
                  <Typography sx={{fontWeight:'500'}} >{team.position}</Typography>
  
          </Paper>
        )
      })
    }
     </div>
     </div>
      </div>
  )
}

export default Services