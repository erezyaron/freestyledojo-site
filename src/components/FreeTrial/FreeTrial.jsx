import React from 'react';
import './FreeTrial.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TrialClassForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    // TODO: Replace with your own API endpoint or server-side mail handler
    fetch('YOUR_BACKEND_ENDPOINT', {
      method: 'POST',
      body: data,
    }).then((response) => {
      // Handle response here
      console.log('Response:', response);
    });
  };

  render() {
    return (
      <div className="trial-class-section">
        <div className="trial-class-info">
        <h2>BOOK A FREE TRIAL CLASS</h2>
    <p>Try out any of our classes for free and see if Freestyle Dojo is the right fit for you! Our coaches are happy to guide you through your first steps into the world of martial arts to ensure you are comfortable, confident and ready to learn!</p>
    <ul>
      <li>
        <span className='list-icon'><FontAwesomeIcon icon={faAngleRight} /></span>
        <span className='list-text'>Jiu Jitsu Classes</span>
        </li>
      <li><span className='list-icon'><FontAwesomeIcon icon={faAngleRight} /></span>
      <span className='list-text'>Kickboxing Classes</span>
      </li>
      <li><span className='list-icon'><FontAwesomeIcon icon={faAngleRight} /></span>
      <span className='list-text'>Fitness Classes</span>
      </li>
      <li><span className='list-icon'><FontAwesomeIcon icon={faAngleRight} /></span>
      <span className='list-text'>Kids Classes</span>
      </li>
    </ul>
        </div>
        <div className="trial-class-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="phone" placeholder="Phone Number" required />
            <input type="text" name="referral" placeholder="Where did you hear about us?" />
            <select name="interest">
              <option value="jiu_jitsu">Jiu Jitsu</option>
              <option value="kickboxing">Kickboxing</option>
              <option value="fitness">Fitness</option>
              <option value="kids">Kids Programs</option>
              <option value="kids">General Inquiry</option>
              <option value="kids">Gym Rental</option>
            </select>
            <textarea name="message" placeholder="Any details you would like to share with our team!" required></textarea>
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TrialClassForm;
