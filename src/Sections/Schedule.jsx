import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
const Schedule = () => {
    return (
        <>
        <div id="schedule">
            <div className="schedule-column">

            <div className="info-section">
      <div className="info-item">
        <FontAwesomeIcon icon={faClock} className="info-icon" />
        <h2 className="info-title">Hours</h2>
        <p className="info-text">MON - FRI | 7 AM - 10 PM<br/>SAT | 12 PM - 4:30 PM</p>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faPhone} className="info-icon" />
        <h2 className="info-title">Call Us</h2>
        <p className="info-text">647-245-8829</p>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
        <h2 className="info-title">Visit Us</h2>
        <p className="info-text">191 Geary Ave<br/>Toronto, ON M6H2C1</p>
      </div>
    </div>
    </div>
            </div>
        </>
    )
};

export default Schedule