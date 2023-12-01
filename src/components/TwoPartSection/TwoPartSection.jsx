import React from "react";
import "./TwoPartSection.css";
import PropTypes from "prop-types";
import { faChevronRight,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TwoPartSection = ({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  content,
  buttonText,
  buttonLink,
  listContents,
  reversed,
}) => {
  TwoPartSection.propTypes = {
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    listContents: PropTypes.string,
    reversed: PropTypes.bool,
  };
  let listItems;
  if (listContents) {
    listItems = listContents.split("\\n").map((item, index) => (
      <li className="trial-list-item" key={index}>
        <span className="list-icon">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span className="list-text">{item}</span>
      </li>
    ));
  }
  const paragraphs = content
    .split("\\n")
    .map((item, i) => <p key={i}>{item}</p>);
  return (
    <>
      <div className="section">
        <div className="two-part-container">
          {!reversed ? (
            <div className="left-container">
              <div className="inner-container">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                {paragraphs}
                {listContents && <ul className="items-list">{listItems}</ul>}
                {buttonText && buttonLink && (
                  <div className="inner-button-container">
                    <div className="inner-button">
                      <div className="about-item">
                        <a className="button" href={buttonLink}>
                          <FontAwesomeIcon
                            className="icon"
                            icon={faChevronRight}
                          />
                          {buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="left-container">
              <img src={imageUrl} alt={imageAlt} />
            </div>
          )}
          {!reversed ? (
            <div className="right-container">
              <img src={imageUrl} alt={imageAlt} />
            </div>
          ) : (
            <div className="right-container">
              <div className="inner-container">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                {paragraphs}
                {listContents && <ul>{listItems}</ul>}
                {buttonText && buttonLink && (
                  <div className="inner-button-container">
                    <div className="inner-button">
                      <div className="about-item">
                        <a className="button" href={buttonLink}>
                          <FontAwesomeIcon
                            className="icon"
                            icon={faChevronRight}
                          />
                          {buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TwoPartSection;
