import React from 'react';
import './ActionButton.css'; // Make sure to import the CSS file
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionButton = ({ label, onClick }) => {
  return (
    <div className="action-button" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
      {label}
    </div>
  );
};

export default ActionButton;
