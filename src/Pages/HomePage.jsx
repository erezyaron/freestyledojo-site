import GoogleReviews from "../GoogleReviews/GoogleReviews";
import Layout from "../Layout"; // Import the Layout component
import NoGiSection from "../NoGiSection/NoGiSection";
import HoursPhoneVisit from "../Sections/HoursPhoneVisit";
import Programs from "../Sections/Programs";
import TwoPartSection from "../Sections/TwoColumns";
import TrialClass from "../TrialClass/TrialClass";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {


  const location = useLocation();

  // Define page-specific properties for the Top component
  const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "MMA & Jiu Jitsu Classes",
    subtitle: "an innovative martial arts gym in toronto",
    buttons: [
      { label: "seminars", action: "/events" },
      { label: "book a class", action: "/book-a-class" },
    ],
  };
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
    <Layout topProps={topProps}>
      <TwoPartSection
        imageUrl="instagram"
        imageAlt=""
        title="Toronto's Martial Arts Gym"
        subtitle="Our mission at freestyle dojo"
        content="At Freestyle our mission is to provide you and our community with world-class martial arts instruction. We do so in an environment that is welcoming, whether you are trying martial arts for the 1st time or already an advanced practitioner. \n Located in the heart of Toronto’s West End, our dojo offers the best classes in a range of martial arts disciplines. Our expert instructors specialize in teaching Jiu Jitsu, MMA, Fitness & Conditioning Classes – For Both Kids & Adults.\nAll of our classes start with a free trial so you can try our dojo out and see if it is the right fit for you and your goals!"
        buttonText="Book a trial class today"
        buttonLink="/contact-free-trial-class"
        reversed={true}
      />
      <NoGiSection />
      <GoogleReviews />
      <TrialClass title="BOOK A FREE TRIAL CLASS"
      content="Try out any of our classes for free and see if Freestyle Dojo is the right fit for you!\nOur coaches are happy to guide you through your first steps into the world of martial arts to ensure you are comfortable, confident and ready to learn!"
      showBullets={true} />
      <TwoPartSection
        imageUrl="/assets/toronto-martial-arts-gym-rental-scaled.jpg"
        imageAlt="Training Space"
        title="LOOKING FOR A SPACE TO TRAIN YOUR CLIENTS?"
        content="We have the most affordable rates on our mat spaces and gym rentals in Toronto. We offer a flat fee, plus competitive rates for other industries looking to rent a location.\n Contact us for a quote and more information on how to book your time."
        buttonText="Get a Quote"
        buttonLink="/gym-rentals"
      />
    </Layout>
  );
};

export default HomePage;
