import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";
import './style.scss'



const Footer = () => {

    const generateWhatsAppLink = () => {
        const phoneNumber = '8271593648'; // Replace with the desired phone number
        const message = 'Hii'; // Replace with your message
        const encodedMessage = encodeURIComponent(message);
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }


    return (
        <footer className="footer">
            <div className="contentWrapper">
                <div className="discription">
                    <h2>Hello My Doctor</h2>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi harum corporis consequuntur
                        raesentium nostrum voluptatibus quasi optio aut?</p>
                </div>


                <ul className="menuItems">
                    <h2>Contact us</h2>
                    <li className="menuItem"><FaMapMarkerAlt /> <p>V-504,5th floor ,homes 121,sec-121 Noida 201302</p></li>

                    <a className="menuItem" href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                        <p>9199599591</p>
                    </a>

                    <li className="menuItem"><FaEnvelope /> <p>info@hellomydocter.in</p></li>
                </ul>
                <div className="followus">
                    <h2>Follow us</h2>
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
            </div>
        </footer>
    );
};

export default Footer;