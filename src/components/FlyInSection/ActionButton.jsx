import './ActionButton.css'; // Make sure to import the CSS file
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'
const ActionButton = ({ label, to }) => {
ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
  return (
    <div className="action-button">
      <FontAwesomeIcon icon={faChevronRight} />
      <a href={to}>{label}</a>
    </div>
  );
};

export default ActionButton;
