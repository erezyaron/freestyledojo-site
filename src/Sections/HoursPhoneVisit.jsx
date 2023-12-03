const HoursPhoneVisit = () => {
  return (
    <>
      <div id="schedule" className="hours-phone-visit">
        <div className="schedule-column">
          <div className="info-section">
            <div className="info-item ">
              <i className="fa-regular fa-clock info-icon-behind"></i>
              <h2 className="info-title">Hours</h2>
              <div className="info-text">
                <div className="day-schedule1">MON - FRI</div><div className="day-schedule1">7 AM - 10 PM</div>
                <div className="day-schedule1">SAT</div><div className="day-schedule1">12 PM - 4:30 PM</div>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone info-icon-behind"></i>
              <h2 className="info-title">Call Us</h2>
              <p className="info-text">
                <a className="info-text" href="tel:647-245-8829">
                  647-245-8829
                </a>
              </p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt info-icon-behind"></i>
              <h2 className="info-title">Visit Us</h2>
              <p className="info-text">
                191 Geary Ave
                <br />
                Toronto, ON M6H2C1
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoursPhoneVisit;
