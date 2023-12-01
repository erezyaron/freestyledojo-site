import Schedule from "../components/Schedule/Schedule";

import Footer from "../components/Footer/Footer";
import Top from "../components/Top/Top";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ClassSchedule = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/programs') {
      const section = document.getElementById('programs');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.pathname === '/contact-free-trial-class') {
      const section = document.getElementById('TrialClassForm');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <>
      <Top
        bgImage={"/assets/jiu-jitsu-class-toronto-scaled.webp"}
        title={"Kickboxing & Jiu Jitsu Classes"}
        subtitle={"an innovative martial arts gym in toronto"}
        buttons={[
          { label: "free trial class", action: "/contact-free-trial-class" },
          { label: "seminars", action: "/events" },
          { label: "book a class", action: "/book-a-class" },
        ]}
      />
      <Schedule />
      <Footer />
    </>
  );
};

export default ClassSchedule;
