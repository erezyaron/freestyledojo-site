import './Header.css'
import {
    Nav,
    NavbarContainer,
    NavSpacer,
    NavMenu,
    NavItem,
    NavLinks,
  } from "./HeaderElements";  
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faInstagram, faFacebookF, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => { 
    return (
        <Nav>
            <NavbarContainer>
                <NavSpacer />
            <NavMenu>
            <NavItem>
                <NavLinks icon={faLocationDot} to="https://goo.gl/maps/sbaAUU82DKgeaX3L8" >&nbsp;191 Geary Avenue, Toronto, ON M6H2C1</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks icon={faPhoneFlip} to="tel:647-245-8829">&nbsp;647-245-8829</NavLinks>
            </NavItem>
            <NavSpacer />
            <NavItem>
              <NavLinks icon={faFacebookF} to="https://www.facebook.com/profile.php?id=100076292797233"  />
            </NavItem>
            <NavItem>
              <NavLinks icon={faInstagram} to="https://www.instagram.com/freestyledojo/">
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks icon={faGoogle} to="https://goo.gl/maps/sbaAUU82DKgeaX3L8">
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks icon={faSquareYoutube} to="https://www.youtube.com/@freestyledojo9340">
              </NavLinks>
            </NavItem>
          </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Header