/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = ({ children }) => {
  return (
    <nav className="navbar">
      {children}
    </nav>
  );
};
    
export const NavbarContainer = ({ children }) => (
  <div>
    {children}
  </div>
);

export const NavLogo = ({ children, ...rest }) => (
  <LinkRouter
    {...rest}
  >
    {children}
  </LinkRouter>
);

export const NavMenu = ({ children }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between', // This will spread the items across the top
        alignItems: 'center', // This will vertically center the items
        padding: '0 24px', // This adds a small gap on the left and right
        height: '44px', // Use full height of the Nav
      }}>
        {children}
      </div>
);

export const NavItem = ({ children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center', // This will vertically center the items within each NavItem
        height: '100%'
      }}>
        {children}
      </div>
);

export const NavLinks = ({ children, to, icon, ...rest }) => (
    <a href={to} style={{
        color: 'white', // Set the text color
        textDecoration: 'none', // Remove underline from links
        padding: '0 8px', // Add some padding around the text
        fontFamily: 'Titillium Web',
        fontWeight: 700,
        textTransform: 'uppercase',
        alignItems: 'center',
        display:'flex',
        height: '100%',
      }} {...rest}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {children}
      </a>
);

export const NavBtn = ({ children }) => (
  <nav className="flex items-center md:hidden">{children}</nav>
);

export const NavBtnLink = ({ children, ...rest }) => (
  <LinkRouter {...rest} className="btn-green">
    {children}
  </LinkRouter>
);

export const NavSpacer = () => {
    return (
      <div style={{ flex: 1 }}></div> // This will take up all available space
    );
  };
