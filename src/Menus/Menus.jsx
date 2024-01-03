import { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";

const Menus = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Dynamically set the initial value of isMenuOpen based on isSmallScreen
  const [isMenuOpen, setIsMenuOpen] = useState(!isSmallScreen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Listen for window resize events to update isSmallScreen
  useEffect(() => {
    const handleResize = () => {
      const newIsSmallScreen = window.innerWidth <= 768;
      setIsSmallScreen(newIsSmallScreen);
      setIsMenuOpen(!newIsSmallScreen);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="menus">
      {isSmallScreen && (
        <div className="left-side-image">
          <LinkRouter to="/">
            <img className="logo" src="/assets/FS-LOGO.png" alt="Freestyle Dojo Logo" />
          </LinkRouter>
        </div>
      )}
      <div className="logo" onClick={toggleMenu}>
        {isSmallScreen ? (
          <div className="hamburger-icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        ) : (
          <LinkRouter className="logo" to="/">
            <img
              className="logo"
              src="/assets/FS-LOGO.png"
              alt="Freestyle Dojo Logo"
            />
          </LinkRouter>
        )}
      </div>
      {isMenuOpen && (
        <ul className={`menu-list ${isMenuOpen ? 'show' : ''}`}>
          <li className="menu-item">
            <LinkRouter to="/schedule">Schedule</LinkRouter>
            {/* Dropdown for "Schedule" menu */}
            <ul className="submenu">
              <li>
                <LinkRouter to="/book-a-class">Book a Class</LinkRouter>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <LinkRouter to="/programs">Programs</LinkRouter>
            {/* Dropdown for "Programs" menu */}
            <ul className="submenu">
              <li>
                <LinkRouter to="/toronto-jiu-jitsu-classes">Jiu Jitsu</LinkRouter>
              </li>
              <li>
                <LinkRouter to="/toronto-fitness-classes">Fitness</LinkRouter>
              </li>
              <li>
                <LinkRouter to="/toronto-mma-classes">MMA</LinkRouter>
              </li>
              <li>
                <LinkRouter to="/toronto-kids-martial-arts">Kids</LinkRouter>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <LinkRouter to="/about-our-coaches">About</LinkRouter>
            <ul className="submenu">
              <li>
                <LinkRouter to="/prices">Prices</LinkRouter>
              </li>
              <li>
                <LinkRouter to="/facilities">Facilities</LinkRouter>
              </li>
              <li>
                <LinkRouter to="/events">Events</LinkRouter>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <LinkRouter to="/gym-rentals">Gym Rentals</LinkRouter>
          </li>
          <li className="menu-item button">
            <LinkRouter to="/contact-free-trial-class">Free Trial</LinkRouter>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Menus;
