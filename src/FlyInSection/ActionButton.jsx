import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ActionButton = ({ label, to, newwindow }) => {
ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  newwindow: PropTypes.bool,
};
const isExternalLink = to.startsWith("http") || to.startsWith("https");
console.log(isExternalLink);
console.log(newwindow);
if(isExternalLink) {
  return (
    <div className="action-button">
      <i className="fa-solid fa-angle-right"></i>
      <a href={to} target={newwindow ? '_blank' : undefined} rel={newwindow ? 'noopener noreferrer' : undefined}>
        {label}
      </a>
    </div>
  );
}
else {
  return (
    <div className="action-button">
      <i className="fa-solid fa-angle-right"></i>
      <Link to={to}>
        {label}
      </Link>
    </div>
  );
}
};

export default ActionButton;
