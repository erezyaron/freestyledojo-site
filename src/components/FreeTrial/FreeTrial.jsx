import React from "react";
import "./FreeTrial.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./form";
import PropTypes from "prop-types";

const TrialClassForm = ({ title, content, hideBullets }) => {
  TrialClassForm.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    hideBullets: PropTypes.bool,
  };
  const paragraphs = content
    .split("\\n")
    .map((item, i) => <p key={i}>{item}</p>);
  return (
    <div id="TrialClassForm" className="trial-class-section">
      <div className="trial-class-info">
        <h2 className="trial-class-info-title">{title}</h2>
        {paragraphs}
        <p>&nbsp;</p>
        {hideBullets && (
          <ul className="trial-list">
            <li className="trial-list-item">
              <span className="list-icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="list-text">Jiu Jitsu Classes</span>
            </li>
            <li className="trial-list-item">
              <span className="list-icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="list-text">Kickboxing Classes</span>
            </li>
            <li className="trial-list-item">
              <span className="list-icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="list-text">Fitness Classes</span>
            </li>
            <li className="trial-list-item">
              <span className="list-icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="list-text">Kids Classes</span>
            </li>
          </ul>
        )}
      </div>
      <ContactForm />
    </div>
  );
};

export default TrialClassForm;
