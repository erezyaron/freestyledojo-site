import "./Background.css";
import PropTypes from "prop-types";

const Background = ({ bgImage, children }) => {
  Background.propTypes = {
    bgImage: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  return (
    <div className="background">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
