/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faL, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Link as LinkRouter } from "react-router-dom";

export const Menu = ({ children }) => (
  <div className="menus">{children}</div>
);

export const MenuContainer = ({ children }) => (
  <div className="menu-container">{children}</div>
);

export const MenuSpacer = () => (
  <div className="menu-spacer">&nbsp;</div>
);

export const MenuImage = ({ src, alt }) => (
  <div className="menu-image"><a className="logo" href="/"><img className="logo" src={src} alt={alt} /></a></div>
);

export const DropdownMenu = ({ children, label, onClick }) => {
  const [isOpen, setIsOpen]=useState(false);
  return (
  <div className="dropdown-menu" onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
    <LinkRouter className="menu-button" to={onClick}>{label} <FontAwesomeIcon icon={faCaretDown} /></LinkRouter>
    {isOpen && (
      <div className="dropdown-content">
      {children}
      </div>
      )}
  </div>
  );
};

export const MenuItem = ({ children, to }) => (
  <div className="menu-item"><LinkRouter to={to}>{children}</LinkRouter></div>
);

export const MenuButton = ({ onClick, label, variant }) => (
  <LinkRouter className={`menu-button ${variant}`} to={onClick}>
    {label}
  </LinkRouter> 
);

