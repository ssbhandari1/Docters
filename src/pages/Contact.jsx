import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";
const Contact = () => {

  const generateWhatsAppLink = () => {
    const phoneNumber = '8271593648'; // Replace with the desired phone number
    const message = 'Hii'; // Replace with your message
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
}

  return (
    <div className="aboutContainer">

      <div className="contactContainer">
        <div className="information">
          <h1>Contact Us</h1>
          <p>विशेष जानकारी, सुझाव या शिकायत के लिए सम्पर्क करें।</p>

          <div className="contactInform">
            <div className="contact">
              <h3>Contact Information</h3>
              <p>say something to start a live chat!</p>

              <ul className="menuItems">
              <a className="menuItem" href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                            <p>9199599591</p>
                        </a>
                <li className="menuItem"><FaEnvelope /> <p>info@hellomydocter.in</p></li>
                <li className="menuItem"><FaMapMarkerAlt /> <p>V-504,5th floor ,homes 121,sec-121 Noida 201302</p></li>

              </ul>

              <div className="socialIcons">
              <a className="icon" href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a className="icon" href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a className="icon" href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>


                        <a className="icon" href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                
              </div>
            </div>
           
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.7928748768704!2d76.78345677473342!3d30.667960488761697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec8230a9dd53%3A0x42c6835dc358b53a!2sShaheed%20Bhagat%20Singh%20International%20Airport%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1694149312428!5m2!1sen!2sin"

                 allowfullscreen=''
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  className='map'
                  >
                 
                  </iframe>

        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact