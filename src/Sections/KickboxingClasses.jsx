import TwoPartSection from "../components/TwoPartSection/TwoPartSection";
import Footer from "../components/Footer/Footer";
import Top from "../components/Top/Top";

const KickboxingClasses = () => {
  return (
    <>
      <Top
        bgImage={"/assets/toronto-womens-kickboxing-scaled.jpg"}
        title={"Kickboxing Gym With Top Rated Coaches"}
        subtitle={"Kickboxing Classes In Toronto"}
        buttons={[
          { label: "free trial class", action: "/contact-free-trial-class" },
        ]}
      />
      <TwoPartSection
        imageUrl="/assets/toronto-martial-arts-classes-scaled.jpg"
        imageAlt="Toronto's Top Rated Kickboxing Gym"
        title="Toronto's Martial Arts Gym"
        subtitle="Level Up Your Fitness With Kickboxing Lessons"
        content="Freestyle Dojo is located in the west end of Toronto. Our dojo offers a range of martial arts practices taught by professional instructors. Kickboxing is a great start for anyone wanting to step into the world of MMA to increase their fitness, reduce stress, and have fun!"
        buttonText="Book a trial class today"
        buttonLink="/contact-free-trial-class"
        listContents="Learn Self-Defense\nImprove Endurance\nRelieve Stress"

        reversed={true}
      />
      <TwoPartSection
        imageUrl="/assets/kickboxing-lessons-in-toronto-scaled.jpg"
        imageAlt="Kickboxing Lessons in Toronto"
        title="Have Fun Getting Into Better Shape"
        content="The Kickboxing/Striking program focuses on MMA techniques and movements rooted in strong boxing and footwork to better hone the balance between offense, defense, and strategic countering. The curriculum focuses on perfecting technique, finding your style, and enjoying the process. A balanced martial artist has an understanding of both grappling and striking, at Freestyle Dojo we encourage everyone to partake in both styles of fighting. "
      />
      <Footer />
    </>
  );
};

export default KickboxingClasses;
