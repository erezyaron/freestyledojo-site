import TwoPartSection from "../components/TwoPartSection/TwoPartSection";
import Footer from "../components/Footer/Footer";
import Top from "../components/Top/Top";

const AboutOurCoaches = () => {
  return (
    <>
      <Top
        bgImage={"/assets/jiu-jitsu-class-toronto-scaled.webp"}
        title={"Our Expert Coaches Are Here To Help You Grow!"}
        subtitle={"Toronto's Local Martial Arts Coaches"}
        buttons={[
          { label: "free trial class", action: "/contact-free-trial-class" },
        ]}
      />
      <p className="info-text" >The Freestyle Dojo coaches bring their diverse martial arts backgrounds to their classes for a holistic approach to martial arts training.</p>
      <TwoPartSection
        imageUrl="/assets/mike-romano-jiu-jitsu-instructor-scaled.jpg"
        imageAlt="The Freestyle Dojo coaches bring their diverse martial arts backgrounds to their classes for a holistic approach to martial arts training."
        title="Mike Romano"
        subtitle="Founder and Coach"
        content="Mike Romano is the head Jiu Jitsu instructor and owner of Freestyle Dojo. For nearly 14 years he’s studied specifically Nogi Jiu Jitsu. \nMike has trained in the infamous 10th Planet system, lived in the dormitories of Tristar Gym and traveled all over the world learning techniques from some of the best grapplers on the planet. His goal is to provide a space where creativity and freedom is nurtured, and to pass on the knowledge gained from years of experience."
        reversed={true}
      />
      <TwoPartSection
        imageUrl="/assets/jesse-bell-jiu-jitsu-instructor-scaled.jpg"
        imageAlt="Jesse Bell - Jiu Jitsu Instructor"
        title="Jesse Bell"
        subtitle="Jiu Jitsu Instructor"
        content="Coach Jesse Bell, like his brother Coach Mike Romano, has fourteen years of Nogi grappling experience. Jesse spent the majority of his time training out of Tristar Gym, with John Danaher’s black belt Firas Zahabi. \nHe has travelled throughout North and South America, teaching out of many of the world’s top academies. A true representative of the American grappling style, Jesse is well-known for his ability to retain and teach even the most advanced details of positions or submissions. He has made it his mission to share his knowledge with the next generation of grapplers and mixed martial artists."
      />
      <Footer />
    </>
  );
};

export default AboutOurCoaches;
