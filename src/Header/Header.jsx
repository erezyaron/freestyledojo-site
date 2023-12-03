

const Header = () => {
    return (
      <header className="custom-header">
        <div className="contact-info">
          <div className="address">
            <a className='desktop-link' href="https://goo.gl/maps/sbaAUU82DKgeaX3L8" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i> 191 Geary Avenue, Toronto, ON M6H2C1
            </a>
          </div>
          <div className="phone">
          <a href="tel:647-245-8829" className='desktop-link'>
              <i className="fas fa-phone"></i> 647-245-8829
            </a>
          </div>
        </div>
        <div className="social-links">
        <a href="tel:647-245-8829" className='mobile-link'>
              <i className="fas fa-phone"></i>
            </a>
          <a href="https://www.facebook.com/profile.php?id=100076292797233" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://goo.gl/maps/sbaAUU82DKgeaX3L8" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a href="https://www.instagram.com/freestyledojo/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@freestyledojo9340" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </header>
    );
  };
  

export default Header;
