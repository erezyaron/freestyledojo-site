import Schedule from "./Schedule";
import Programs from "./Programs";
import NoGiSection from "../components/NoGiSection/NoGiSection";
import GoogleReviews from "../components/GoogleReviews/GoogleReviews";
import TrialClassForm from "../components/FreeTrial/FreeTrial";
import TwoPartSection from "../components/TwoPartSection/TwoPartSection";
import Footer from "../components/Footer/Footer";
import Top from "../components/Top/Top";

const FreeTrialClass = () => {

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
      <Programs />
      <TwoPartSection
        imageUrl="/assets/toronto-martial-arts-classes-scaled.jpg"
        imageAlt="Kickboxing classes are available"
        title="Toronto's Martial Arts Gym"
        subtitle="Our mission at freestyle dojo"
        content="At Freestyle our mission is to provide you and our community with world-class martial arts instruction. We do so in an environment that is welcoming, whether you are trying martial arts for the 1st time or already an advanced practitioner. \n Located in the heart of Toronto’s West End, our dojo offers the best classes in a range of martial arts disciplines. Our expert instructors specialize in teaching Jiu Jitsu, Kickboxing, Fitness & Conditioning Classes – For Both Kids & Adults.\nAll of our classes start with a free trial so you can try our dojo out and see if it is the right fit for you and your goals!"
        buttonText="Book a trial class today"
        buttonLink="/contact-free-trial-class"
        reversed={true}
      />
      <NoGiSection />
      <GoogleReviews />
      <TrialClassForm title={title} 
      content={content}
      />
      <TwoPartSection
        imageUrl="/assets/toronto-martial-arts-gym-rental-scaled.jpg"
        imageAlt="Training Space"
        title="LOOKING FOR A SPACE TO TRAIN YOUR CLIENTS?"
        content="We have the most affordable rates on our mat spaces and gym rentals in Toronto. We offer a flat fee, plus competitive rates for other industries looking to rent a location.\n Contact us for a quote and more information on how to book your time."
        buttonText="Get a Quote"
        buttonLink="/gym-rentals"
      />
      <Footer />
    </>
  );
};

export default FreeTrialClass;
