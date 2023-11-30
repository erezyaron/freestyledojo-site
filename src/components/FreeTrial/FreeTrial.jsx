import React from "react";
import "./FreeTrial.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./form";

class TrialClassForm extends React.Component {
  render() {
    return (
      <div className="trial-class-section">
        <div className="trial-class-info">
          <h2>BOOK A FREE TRIAL CLASS</h2>
          <p>
            Try out any of our classes for free and see if Freestyle Dojo is the
            right fit for you!{" "}
          </p>
          <p>
            Our coaches are happy to guide you through your first steps into the
            world of martial arts to ensure you are comfortable, confident and
            ready to learn!
          </p>
          <p>&nbsp;</p>
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
        </div>
        <ContactForm />
      </div>
    );
  }
}

export default TrialClassForm;
