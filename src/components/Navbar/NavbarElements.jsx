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