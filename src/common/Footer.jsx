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
        const message = 'Hello, this is a test message.'; // Replace with your message
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
                    <li className="menuItem">
                        <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <p>9199599591</p></li>
                    <li className="menuItem"><FaEnvelope /> <p>info@hellomydocter.in</p></li>
                </ul>
                <div className="followus">
                    <h2>Follow us</h2>
                    <div className="socialIcons">
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;