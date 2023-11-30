import React from 'react';
import './Footer.css'; 
import {
    Nav,
    NavbarContainer,
    NavSpacer,
    NavMenu,
    NavItem,
    NavLinks,
  } from "../Header/HeaderElements";  
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faInstagram, faFacebookF, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-left'>
            <div className='footer-column'>
                <div className='footer-image'>
                    <img className='image' src='/src\assets\freestyle-feather-logo.webp' />
                </div>
                <div className="footer-socials">
                    <span className='social-item'><a href="https://www.facebook.com/profile.php?id=100076292797233" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faFacebookF} /></a></span>
                        <span className='social-item'><a href="https://www.instagram.com/freestyledojo/" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} /></a></span>
                        <span className='social-item'><a href="https://goo.gl/maps/sbaAUU82DKgeaX3L8" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon  icon={faGoogle} /></a></span>
                        <span className='social-item'><a href="https://www.youtube.com/@freestyledojo9340" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon  icon={faSquareYoutube} /></a></span>
                </div>
            </div>
        </div>
        <div className='footer-center'>
        <div className="footer-address">
        <h3>FREESTYLE DOJO</h3>
        <a className="link" href="https://goo.gl/maps/sbaAUU82DKgeaX3L8" >
        <FontAwesomeIcon icon={faLocationDot} />
        &nbsp;191 Geary Avenue, Toronto, ON M6H2C1</a>
        <a href="tel:647-245-8829" className='link'>
        <FontAwesomeIcon icon={faPhoneFlip} />
        &nbsp;647-245-8829</a>
        <a className='button' href="/contact-free-trial-class">FREE TRIAL CLASS</a>
      </div>
        </div>
        <div className='footer-right'>
        <div className="footer-links">
        <h3>LINKS</h3>
        <ul  className='footer-list'>
        <li className='footer-list-item'><a className='link' href="/schedule">Class Schedule</a></li>
        <li className='footer-list-item'><a className='link' href="/about-freestyle-dojo">About Us</a></li>
        <li className='footer-list-item'><a className='link' href="/gym-rentals">Gym Rentals</a></li>
        <li className='footer-list-item'><a className='link' href="/programs">Progarms</a></li>
        <li className='footer-list-item'><a className='link' href="/book-a-class">Book a class</a></li>
        </ul>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
