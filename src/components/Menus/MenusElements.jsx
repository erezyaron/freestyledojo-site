/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faL, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Link as LinkRouter } from "react-router-dom";

export const Menu = ({ children }) => (
  <div className="menus" >{children}</div>
);

export const MenuContainer = ({ children }) => (
  <div className="menu-container">{children}</div>
);

export const MenuSpacer = () => (
  <div className="menu-spacer">&nbsp;</div>
);

export const MenuImage = ({ src, alt }) => (
  <div className="menu-image"><img className="logo" src={src} alt={alt} /></div>
);

export const DropdownMenu = ({ children, label }) => {
  const [isOpen, setIsOpen]=useState(false);
  return (
  <div className="dropdown-menu" onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
    <button className="menu-button">{label} <FontAwesomeIcon icon={faCaretDown} /></button>
    {isOpen && (
      <div className="dropdown-content">
      {children}
      </div>
      )}
  </div>
  );
};

export const MenuItem = ({ children, onClick }) => (
  <div className="menu-item" onClick={onClick}>{children}</div>
);

export const MenuButton = ({ onClick, label, variant }) => (
  <button className={`menu-button ${variant}`} onClick={onClick}>
    {label}
  </button> 
);

