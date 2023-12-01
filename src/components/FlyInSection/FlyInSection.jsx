import "./FlyInSection.css";
import ActionButton from "./ActionButton";
import PropTypes from "prop-types";

const FlyInSection = ({ title, subtitle, buttons }) => {
  FlyInSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.array,
  };
  return (
    <div className="widget-wrap">
      <div className="widget">
        <div className="widget-container">
          <div className="widget-separator">
            <span className="widget-span-separator"></span>
          </div>
        </div>
      </div>
      <div className="fly-in">
        <h2 className="fly-in-title">{title}</h2>
        <h1 className="fly-in-section">{subtitle}</h1>
        <div className="button-container">
            {
            (buttons.length > 0) &&
              buttons.map((button,index) => (
              <ActionButton key={index} label={button.label} to={button.action} />
           ))
          }
        
        </div>
      </div>
    </div>
  );
};

export default FlyInSection;
