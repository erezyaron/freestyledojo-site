/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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

export const DropdownMenu = ({ children }) => (
  <div>{children}</div> // Style as needed
);

export const MenuItem = ({ children }) => (
  <div>{children}</div> // Style as needed
);

export const MenuButton = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button> // Style as needed
);

