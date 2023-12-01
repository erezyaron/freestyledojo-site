import TrialClassForm from "../components/FreeTrial/FreeTrial";
import TwoPartSection from "../components/TwoPartSection/TwoPartSection";
import Footer from "../components/Footer/Footer";
import Top from "../components/Top/Top";

const GymRentalsPage = () => {
  return (
    <>
      <Top
        bgImage={"/assets/jiu-jitsu-class-toronto-scaled.webp"}
        title={"Training Space Available"}
        buttons={[]}
      />
      <TwoPartSection
        imageUrl="/assets/toronto-martial-arts-gym-rental-scaled.jpg"
        imageAlt="Training Space"
        title="LOOKING FOR A SPACE TO TRAIN YOUR CLIENTS?"
        content="We have the most affordable rates on our mat spaces and gym rentals in Toronto. We offer a flat fee, plus competitive rates for other industries looking to rent a location.\n Contact us for a quote and more information on how to book your time."
      />
      <TrialClassForm title="MESSAGE FOR A QUOTE" 
      content="Fill out the form and one of our staff will contact you with details" 
      />
      <Footer />
    </>
  );
};

export default GymRentalsPage;
