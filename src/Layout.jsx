import Top from "./Top/Top";
import { Link } from "react-router-dom";

const Layout = ({ children, topProps }) => {
  return (
    <>
      <Top {...topProps} />
      <main>{children}</main>
      <footer>
        <div className="footer-left">
          <div className="footer-column">
            <div className="footer-image">
              <img
                className="image"
                src="/assets/freestyle-feather-logo.webp"
              />
            </div>
            <div className="social-links">
              <a href="tel:647-245-8829" className="mobile-link">
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076292797233"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://goo.gl/maps/sbaAUU82DKgeaX3L8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-map-marker-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/freestyledojo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@freestyledojo9340"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-address">
            <h3>FREESTYLE DOJO</h3>
            <a className="link" href="https://goo.gl/maps/sbaAUU82DKgeaX3L8">
              <i className="fas fa-map-marker-alt"></i>
              &nbsp;191 Geary Avenue, Toronto, ON M6H2C1
            </a><br />
            <a href="tel:647-245-8829" className="link">
              <i className="fas fa-phone"></i>
              &nbsp;647-245-8829
            </a><br />
            <Link className="footer button" to="/contact-free-trial-class">
              FREE TRIAL CLASS
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h3>LINKS</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link className="link" to="/schedule">
                  Class Schedule
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="link" to="/about-our-coaches">
                  About Us
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="link" to="/gym-rentals">
                  Gym Rentals
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="link" to="/programs">
                  Programs
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="link" to="/book-a-class">
                  Book a class
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
