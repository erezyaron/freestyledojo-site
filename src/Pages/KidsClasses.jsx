
import Layout from '../Layout'; // Import the Layout component
import TwoPartSection from "../Sections/TwoColumns";
import  { useEffect } from 'react';
const KidsClassesPage = () => {
   // Define page-specific properties for the Top component
   const topProps = {
    bgImage: "/assets/kids-mma-class-toronto-scaled.jpg",
    title: "Specializing In Kids Jiu Jitus & MMA",
    subtitle: "Kids Martial Arts Program IN Toronto",
    buttons: [
        { label: "free trial class", action: "/contact-free-trial-class" },
        { label: "Holiday Special", action: "/holidayspecial" },
    ],
  };
  useEffect(() => {
    // Scrolls to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout topProps={topProps}>
      <TwoPartSection
        imageUrl="/assets/kids-mma-lessons-scaled.jpg"
        imageAlt="MMA classes are available"
        title="MMA & JIU JITSU For CHILDREN"
        content="Enroll your child in one of our programs so that we can help them develop their fitness and build a strong foundation for important life skills. From self-discipline to problem-solving, our in-depth kid’s programs are built to help develop youth."
        reversed={true}
        listContents="Self-Defense Skills\nSelf-Discipline\nSocial Skills"
      />
      <TwoPartSection
        imageUrl="/assets/kids-martial-arts-lesson-scaled.jpg"
        imageAlt="Engaging Youth MMA Classes For Your Kid"
        title="Self Defense for Kids"
        content="We focus on Jiu Jitsu, wrestling and self defense techniques, while instilling a love of the sport in your child. In addition to a fun learning atmosphere, we have the ability to turn your child into a world class competitive athlete and connect them to the most prestigious local, national, and international competitions. Our curriculum teaches a daily technique through a combination of age appropriate drills and games, and our coaches emphasize self-discipline, safety and anti-bullying to create an inclusive and welcoming atmosphere."
      />
      <TwoPartSection
        imageUrl="/assets/youth-mma-classes-scaled.jpg"
        imageAlt="Empowering Youth Through Martial Arts Excellence"
        title="Empowering Youth Through Martial Arts Excellence"
        content="Enroll your child in our comprehensive programs, where we focus on Jiu Jitsu, wrestling, and self-defense techniques, all while fostering a genuine love for these sports. Our dedicated coaches create a fun learning environment, blending age-appropriate drills, games, and daily techniques. We prioritize self-discipline, safety, and anti-bullying, ensuring an inclusive atmosphere. Plus, we have the expertise to help your child excel in competitive sports, connecting them to prestigious local, national, and international competitions. Join us to empower your child's physical and personal development today!"
        reversed={true}
      />
    </Layout>
  );
};

export default KidsClassesPage;
