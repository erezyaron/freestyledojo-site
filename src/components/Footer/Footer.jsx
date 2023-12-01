import React from 'react';
import './Footer.css'; 
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faInstagram, faFacebookF, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-left'>
            <div className='footer-column'>
                <div className='footer-image'>
                    <img className='image' src='/assets/freestyle-feather-logo.webp' />
                </div>
                <div className="footer-socials">
                    <span className='social-item'><Link to="https://www.facebook.com/profile.php?id=100076292797233" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faFacebookF} /></Link></span>
                        <span className='social-item'><Link to="https://www.instagram.com/freestyledojo/" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} /></Link></span>
                        <span className='social-item'><Link to="https://goo.gl/maps/sbaAUU82DKgeaX3L8" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon  icon={faGoogle} /></Link></span>
                        <span className='social-item'><Link to="https://www.youtube.com/@freestyledojo9340" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon  icon={faSquareYoutube} /></Link></span>
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
        <Link className='button' to="/contact-free-trial-class">FREE TRIAL CLASS</Link>
      </div>
        </div>
        <div className='footer-right'>
        <div className="footer-links">
        <h3>LINKS</h3>
        <ul  className='footer-list'>
        <li className='footer-list-item'><Link className='link' to="/schedule">Class Schedule</Link></li>
        <li className='footer-list-item'><Link className='link' to="/about-our-coaches">About Us</Link></li>
        <li className='footer-list-item'><Link className='link' to="/gym-rentals">Gym Rentals</Link></li>
        <li className='footer-list-item'><Link className='link' to="/programs">Progarms</Link></li>
        <li className='footer-list-item'><Link className='link' to="/book-a-class">Book a class</Link></li>
        </ul>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
