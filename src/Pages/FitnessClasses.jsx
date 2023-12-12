
import Layout from '../Layout'; // Import the Layout component
import TwoPartSection from "../Sections/TwoColumns";
import  { useEffect } from 'react';
const FitnessClassesPage = () => {
   // Define page-specific properties for the Top component
   const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "Improve your overall Fitness",
    subtitle: "Toronto Fitness & Conditioning Classes",
    buttons: [
        { label: "free trial class", action: "/contact-free-trial-class" },
    ],
  };
  useEffect(() => {
    // Scrolls to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout topProps={topProps}>
      <TwoPartSection
        imageUrl="/assets/toronto-strength-conditioning-class-scaled.jpg"
        imageAlt="MMA classes are available"
        title="Strength & Fitness Conditioning"
        subtitle="Take your fitness to the next level"
        content="Located in the West End of Toronto, Freestyle Dojo acts as a hub for those wanting to benefit their strength and endurance to become better athletes on all levels. Looking to take your fitness to the next level? Try one of our classes!"
        reversed={true}
        listContents="Boost Overall Health\nIncrease Strength & Power\nIncrease stamina & endurance"
      />
      <TwoPartSection
        imageUrl="/assets/toronto-womens-fitness-class-scaled.jpg"
        imageAlt="Womens Fitness in Toronto"
        title="All Levels Are Welcome"
        content="Fitness is essential in the long-term maintenance of any martial artist. The conditioning classes are professionally programmed and structured to specifically enhance the martial arts program. They are appropriate for all fitness levels and can scale to be as challenging as necessary. We focus on bodyweight exercises and occasionally use kettlebells, dumbbells and elastics in the programming."
      /> <TwoPartSection
      imageUrl="/assets/toronto-mens-fitness-class-scaled.jpg"
      imageAlt="Mens Fitness in Toronto"
      title="Come Train with us"
      content="Optimal physical fitness forms the cornerstone of a successful martial arts journey. Our meticulously designed conditioning sessions are crafted with expertise to complement and elevate your martial arts practice. Suitable for individuals of all fitness backgrounds, our programs can be tailored to suit your unique level of challenge. Our regimen centers around dynamic bodyweight workouts, supplemented with occasional utilization of kettlebells, dumbbells, and resistance bands, ensuring a holistic approach to your fitness and martial arts goals."
      reversed={true}
    />
    <TwoPartSection
      imageUrl="/assets/toronoto-strength-conditioning-class-scaled.jpg"
      imageAlt="Strength and Conditioning Fitness Classes in Toronto"
      title="Strength and Conditioning Fitness Classes"
      content=" Freestyle Dojo stands as a thriving epicenter for individuals striving to enhance their strength and endurance, unlocking their potential as well-rounded athletes. If you're eager to elevate your fitness journey to new heights, look no further. Dive into one of our invigorating classes and embark on a transformative experience today!"
    />
    </Layout>
  );
};

export default FitnessClassesPage;
