import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Nav = ({ children }) => {
  Nav.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <nav className="navbar">{children}</nav>;
};

export const NavbarContainer = ({ children }) => {
  NavbarContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <div className="navbar-container">{children}</div>;
};

export const NavLogo = ({ children, ...rest }) => {
  NavLogo.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <LinkRouter {...rest}>{children}</LinkRouter>;
};

export const NavMenu = ({ children }) => {
  NavMenu.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <div className="nav-menu">{children}</div>;
};
export const NavItem = ({ children }) => {
  NavItem.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <div className="nav-item">{children}</div>;
};

export const NavLinks = ({ children, to, icon, ...rest }) => {
  NavLinks.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    icon: PropTypes.object,
  };
  return (
    <a className="nav-links"
      href={to}
      {...rest}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <span className="nav-links-text">{children}</span>
    </a>
  );
};

export const NavBtn = ({ children }) => {
  NavBtn.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
  <nav className="flex items-center md:hidden">{children}</nav>
);
  };
export const NavBtnLink = ({ children, ...rest }) => {
  NavBtnLink.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
  <LinkRouter {...rest} className="btn-green">
    {children}
  </LinkRouter>
);
  };

export const NavSpacer = () => {
  return (
    <div className="nav-spacer"></div> // This will take up all available space
  );
};
