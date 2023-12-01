import  { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
    interest: "",
    message: "",
  });

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
        "freestyle-website",
        formDetails,
        "dPO6h9ESzHv7JRGxA"
      )
      .then(
        (result) => {
          console.log(result);
          setSubmitMessage("Thank you, our team will respond soon.");
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

  return (
    <div className="trial-class-form">
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
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="referral"
          placeholder="Where did you hear about us?"
          onChange={handleChange}
        />
        <select
          name="interest"
          value={formDetails.interest}
          onChange={handleChange}
        >
          <option value="">Select Interest</option>
          <option value="jiu_jitsu">Jiu Jitsu</option>
          <option value="kickboxing">Kickboxing</option>
          <option value="fitness">Fitness</option>
          <option value="kids">Kids Programs</option>
          <option value="kids">General Inquiry</option>
          <option value="kids">Gym Rental</option>
        </select>
        <textarea
          name="message"
          placeholder="Any details you would like to share with our team!"
          required
          onChange={handleChange}
        ></textarea>
        <button type="submit" disabled={isSubmitted}>Send</button>
        {submitMessage && <p>{submitMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
