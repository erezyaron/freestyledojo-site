import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ActionButton = ({ label, to }) => {
ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
  return (
    <div className="action-button">
      <i className="fa-solid fa-angle-right"></i>
      <Link to={to}>{label}</Link>
    </div>
  );
};

export default ActionButton;
