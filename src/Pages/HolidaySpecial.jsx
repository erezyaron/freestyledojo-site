import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Background from '../Background/Background';
import Header from '../Header/Header';
import  { useEffect, useState } from 'react';
import '../styles/holidayspecial.css'
const HolidaySpecialPage = () => {
   // Define page-specific properties for the Top component
   const topProps = {
    bgImage: "/assets/kids-mma-class-toronto-scaled.jpg",
    title: "EMPOWER YOUR KID IN 2024",
    subtitle: "HOLIDAY 20% OFF JIU JITSU CLASSES",
    buttons: [
        { label: "free trial class", action: "/contact-free-trial-class" },
    ],
  };
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const [isEnrollVisible, setEnrollFormVisible] = useState(false);
  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  }
  const toggleEnrollForm = () => {
    setEnrollFormVisible(!isEnrollVisible);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    emailjs
      .send(
        "freestyle-dojo",
        "holidayspecial",
        formDetails,
        "dPO6h9ESzHv7JRGxA"
      )
      .then(
        (result) => {
          console.log(result);
          setSubmitMessage("Thank you, see you on the mats.");
          // Handle here the success case, maybe clear the form or show a success message
        },
        (error) => {
          console.log(error.text);
          // Handle here the error case
          setSubmitMessage(
            "Sorry, there was an error. Please email info@freestyledojo.ca directly for assistance."
          );
          setIsSubmitted(false);
        }
      );
  };
  useEffect(() => {
    // Scrolls to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
  <Background bgImage={topProps.bgImage}>
    <Header />
    <section>     
      <div className="special-widget">
      <div className="special-div">
        <h2 className="special-title">{topProps.title}</h2>
        <h1 className='special-with'>with</h1>
        <h1 className="special-section">{topProps.subtitle}</h1>
      </div>
    </div>
    </section>
  </Background>
  <main>
    <section>
    <h2 className='owner'>Freestyle Dojo Owner and Instructor Mike Romano</h2>
    <div className="special-video-content">
     {/*<iframe className="special-video" src="https://www.youtube.com/embed/mNyVhXoWGQQ" frameBorder="0" 
      width="560" height="315" autoPlay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      */}<iframe src="https://streamable.com/e/e2nfzs?autoplay=1" frameBorder="0" width="600px" height="480px" allowFullScreen allow="autoplay"></iframe>      
      </div>
      </section>
      <section>
        <h2 className='owner'>Get Your Free 2 Months + 1 Week Trial Today</h2>
        <div className='center-bullets'>
        <ul className='special-bullet-section'>
          <li className='special-list-item'>
              <span className='trial-list-icon'>
                  <i className='fa-solid fa-angle-right'></i>
              </span>
              <span className='special-list-text'>Save $270 CAD by paying $1080 CAD instead of $1350 CAD for annual subscription.</span>
          </li>
          <li className='special-list-item'>
              <span className='trial-list-icon'>
                  <i className='fa-solid fa-angle-right'></i>
              </span>
              <span className='special-list-text'>If your child doesn't absolutely love the class, you will get a full refund if requested within the first week.</span>
          </li>
        </ul>
        </div>
      </section>
      <section>
        <div className="center-bullets">
          <button className="center-button" onClick={toggleEnrollForm}>
          You convinced me. I want to sign up my kid asap.
          </button>
          {isEnrollVisible && (
            <div id="subscribe-form" className="subscribe-form">
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              /><input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
              <input
                type="text"
                name="age"
                placeholder="Child's age"
                required
                onChange={handleChange}
              />
              <button type="submit" disabled={isSubmitted}>Send</button>
              {submitMessage && <p>{submitMessage}</p>}
            </form>
          </div>
          )}
          <button className="center-button1" onClick={toggleForm}>
            Subscribe to our newsletter
          </button>
          {isFormVisible && (
          <div id="subscribe-form" className="subscribe-form">
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={isSubmitted}>Send</button>
        {submitMessage && <p>{submitMessage}</p>}
      </form>
    </div>
          )}

        </div>
      </section>
      <section>
      <div className="special-details">
        <h2 className="special-title">Holiday Offer Details</h2>
        <h1 className='special-conditions'>Conditions</h1>
      </div>
      <div className='conditions-bullets'>
        <strong>1. Eligibility</strong>
      <ul className='conditions-bullet-section'>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Open to children ages 5-15 years old.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Must be residents of Ontario, Canada.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Limited-time offer valid until December 31, 2023. Subscriptions must be signed up for and paid for by December 31th to qualify for the discount.</span>
          </li>
        </ul>
        <strong>2. Discount</strong>
        <ul className='conditions-bullet-section'>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Receive 20% off the annual subscription price for MMA & JIU JITSU FOR CHILDREN classes.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>You save $270 CAD by paying $1080 CAD instead of $1350 CAD. Prices before tax.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Discount applies to the base annual subscription price only, excluding any additional fees or taxes.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Discount cannot be combined with any other promotions or offers.</span>
          </li>
        </ul>
        <strong>3. One-Week Trial</strong>
        <ul className='conditions-bullet-section'>
        <li className='conditions-list-item'>
              <span className='conditions-list-text'>All new students receive a one-week trial period.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>The trial period begins on the date of the child's first class.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>If the child is not satisfied with the program after the first week, a full refund (minus any processing fees) will be issued upon request within 7 days of the first class.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>To request a refund, the parent or guardian must contact Freestyle Dojo in writing at info@freestyledojo.ca</span>
         </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Refunds will be processed within 10 business days of the request.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Only one trial period is permitted per child.</span>
          </li>
        </ul>
        <strong>4. Subscription Details</strong>
        <ul className='conditions-bullet-section'>
        <li className='conditions-list-item'>
              <span className='conditions-list-text'>The annual subscription period is 12 months, starting on the date of enrollment.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Subscription fees are automatically charged monthly to the provided payment method.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>The discounted annual subscription price is valid for the initial year only. Standard renewal rates will apply for subsequent years.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Freestyle Dojo reserves the right to modify or cancel the subscription program at any time with reasonable notice.</span>
          </li>
        </ul>
        <strong>5. Additional Conditions</strong>
        <ul className='conditions-bullet-section'>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>All participants must comply with Freestyle Dojo's policies and procedures, including safety guidelines and attendance expectations.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>Freestyle Dojo reserves the right to refuse or cancel subscriptions at its sole discretion.</span>
          </li>
          <li className='conditions-list-item'>
              <span className='conditions-list-text'>This offer is availabile to first 10 subscribers and may be withdrawn at any time without notice.</span>
          </li>
        </ul>
      </div>
      </section>
  </main>
  <footer>
        <div className="footer-left">
          <div className="footer-column">
            <div className="footer-image">
              <img
                className="image"
                src="/assets/freestyle-feather-logo.webp"
              />
            </div>
            <div className="social-links">
              <a href="tel:647-245-8829" className="mobile-link">
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076292797233"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://goo.gl/maps/sbaAUU82DKgeaX3L8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-map-marker-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/freestyledojo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@freestyledojo9340"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-address">
            <h3>FREESTYLE DOJO</h3>
            <a className="link" href="https://goo.gl/maps/sbaAUU82DKgeaX3L8">
            <i className="fas fa-map-marker-alt"></i>
              &nbsp;191 Geary Avenue, Toronto, ON M6H2C1
            </a><br/>
            <a href="tel:647-245-8829" className="link">
            <i className="fas fa-phone"></i>
              &nbsp;647-245-8829
            </a><br/>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
          © 2023. All rights reserved
          </div>
        </div>
      </footer>
  </>
  );
};

export default HolidaySpecialPage;
