import TwoPartSection from "../Sections/TwoColumns";
import Layout from "../Layout";
import  { useEffect } from 'react';
import TwoColumnsText from "../Sections/TwoColumnsText";

const JiuJitsuClassesPage = () => {
     // Define page-specific properties for the Top component
     const topProps = {
      bgImage: "/assets/toronto-brazilian-jiu-jitsu-class.webp",
      title: "Professional Jiu Jitsu Gym With Expert Trainers",
      subtitle: "Jiu Jitsu Classes IN Toronto",
      buttons: [
        { label: "book a class", action: "/book-a-class" },
      ],
    };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <Layout topProps={topProps}>
      <TwoPartSection
        imageUrl="/assets/mens-toronto-jiu-jitsu-class.png"
        imageAlt="No Gi Jiu Jitsu Classes"
        title="Toronto’s Top Rated No Gi Jiu Jitsu Classes"
        subtitle="See How NO Gi Jiu Jitsu Can Boost Your Fitness"
        content="Freestyle Dojo, located in the west end of Toronto, specializes in No-gi Jiu Jitsu, as we feel that this is more relevant to the modern era of grappling. In order to take a mixed martial artist to the professional level, it’s imperative to focus on building skill in submission wrestling. Newcomers to Jiu Jitsu will benefit from our coaches commitment to staying relevant in a sport that is constantly evolving."
        buttonText="Book a trial class today"
        buttonLink="/contact-free-trial-class"
        reversed={true}
      />
      <TwoPartSection
        imageUrl="/assets/womens-jiu-jitsu-class.jpg"
        imageAlt="Women’s Jiu Jitsu Classes"
        title=""
        content="Jiu Jitsu started in Japan and was later brought to South America by a Japanese judoka named Mitsuyo Maeda who began the style we now call Brazilian Jiu Jitsu. Maeda was trained in Judo, which we know as a throwing art today, however it originally contained many techniques to use on a grounded opponent, this was called Ne Waza. \nAfter establishing himself in Brazil, the legend goes, he was helped and befriended by the Gracie family. He taught Judo to the sons of the family who were instrumental in developing a more robust catalog of ground techniques that would eventually become Brazilian Jiu Jitsu. \nThe Gracie family, among others, proceeded to turn Jiu Jitsu into one of the most effective martial arts the world had ever seen. "
      />
      <TwoPartSection
        imageUrl="/assets/toronto-no-gi-jiu-jitsu.jpg"
        imageAlt="No-Gi Jiu Jitsu Classes"
        title=""
        content="While BJJ was developing in Brazil, there were many other forms of grappling all over the world. Russian Sambo, Catch Wrestling, Folkstyle/Freestyle Wrestling, Greco-Roman Wrestling, Judo, Japanese Jujutsu, Senegalese Wrestling, Turkish Oil Wrestling and many many more. \nFast forward ~100 years and what we have today is by far the greatest and most effective grappling style in history. Submission Grappling, also known as No-gi Jiu Jitsu, is the evolution of martial arts. \nWe have the privilege of standing on the shoulders of our predecessors and, much like Bruce Lee’s Jeet Kune Do, take the best of what history has to offer so we may achieve new heights."
        reversed={true}
      />
        <TwoColumnsText
        ltitle={"Beginners/Advanced Basics"}
          leftText="Introduce beginners to the world of No-Gi Jiu-Jitsu through a structured program inspired by Tristar gym’s head trainer - Firas Zahabi’s training methodology. \nThis program is tailored to build foundational skills and understanding in a supportive and progressive environment.\nOffers the best ramp-up process for new practitioners.\nWhether you’re a beginner or an advanced fighter, this course will change your game.\n&nbsp;"
          rightText="Offered 5 times a week, allowing for consistent practice and skill reinforcement.\nFocus on drilling core techniques in a repetitive cycle, enhancing muscle memory and technical proficiency.\nComprehensive monthly cycles to ensure thorough coverage of essential skills.\nEquips newcomers with the necessary tools to confidently advance in their Jiu-Jitsu journey.\n&nbsp;"
        />
        <TwoColumnsText
        ltitle={"All-Levels Classes"}
          leftText="Our All-Levels classes at Freestyle Dojo are the heart of dynamic learning and skills enhancement. Whether you’re just starting or are an experienced grappler, these classes offer something for everyone.\nDiscover the diversity and richness of grappling with our dedicated and experienced coaches, who have learned around the world from different coaches and varying styles, now eager to pass on that knowledge.\nEach session covers different techniques, ensuring there is always something new to learn.\nWe welcome all skill levels, ensuring a rich learning environment where beginners and advanced practitioners train together, in a welcoming inclusive environment.\n&nbsp;"
          rightText="Have specific questions or technique you are curious about? Our coaches are here to provide personalized guidance.\nFrom fundamental moves to advanced tactics, our classes keep your training fresh and challenging.\nTrain with a diverse group, offering you a chance to learn from different styles and approaches.\nProgress at your pace, whether you attend these to supplament our Beginner program or as your main training sessions, you’ll find ample opportunities to grow.\nConsisting of drills, live drills, and sparring. Sparring is optional and not supervised by an instructor.\n&nbsp;"
        />
        <TwoColumnsText
        ltitle={"Freestyle Sessions / Open Mat"}
          leftText="Freestyle Dojo’s Open Mat sessions are where freedom and exploration merge in the world of NoGi Jiu-Jitsu. These sessions are a cornerstone of our community, offering a unique space for personal growth and experimentation.\nEngage in free rolling tim with fellow practioners, testing your skills in a live setting.\nWork on any technique or sequence of your choice. This is your time to refine and explore.\nOur coaches are available to answer questions and provide feedback and tips, helping you overcome challenges and improve specific areas of your game.\n&nbsp;"
          rightText="Open mat is open and free for everyone, whether you are a gym member or not, our doors are open. This inclusivity is part of our ethos at Freestyle Dojo - a place where everyone, regardless of their level, can come together and share their love for Jiu-Jitsu.\nFreestyle Sessions are special times for our members, with our coaches and other members to work on anything you need. Extra drilling with varying levels of resistance to hone in your game, special tips for your body type and size, meet new training partners and enhance your skills, or just watch and learn from what others are doing.\nCome experince the true spirit of martial arts.\n&nbsp;"
        />
      <TwoPartSection
        imageUrl="/assets/toronto-jiu-jitsu-lessons.jpg"
        imageAlt="Toronto Jiu Jitsu Lessons"
        title=""
        content="This is the ethos of Freestyle Dojo, to remove the labels and the dogma of the past, do away with silly dated representations of respect and honor and focus solely on the art of Submission Grappling.\n&nbsp;New to Jiu Jitsu? No problem. Our coaches are well suited to running a class that caters to all skill levels. Just let us know your experience when you arrive and let us do the rest. Our adult Jiu Jitsu classes are for all practitioners and consist of drills, live drills, and sparring."
        buttonText="Start Today"
        buttonLink="/book-a-class"
      />
    </Layout>
  );
};

export default JiuJitsuClassesPage;
