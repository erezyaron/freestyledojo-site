import TwoPartSection from "../Sections/TwoColumns";
import Layout from "../Layout";
import  { useEffect } from 'react';

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
        title="Toronto's Top Rated No Gi Jiu Jitsu Classes"
        subtitle="See How NO Gi Jiu Jitsu Can Boost Your Fitness"
        content="Freestyle Dojo, located in the west end of Toronto, specializes in No-gi Jiu Jitsu, as we feel that this is more relevant to the modern era of grappling. In order to take a mixed martial artist to the professional level, it’s imperative to focus on building skill in submission wrestling. Newcomers to Jiu Jitsu will benefit from our coaches commitment to staying relevant in a sport that is constantly evolving."
        buttonText="Book a trial class today"
        buttonLink="/contact-free-trial-class"
        reversed={true}
      />
      <TwoPartSection
        imageUrl="/assets/womens-jiu-jitsu-class.jpg"
        imageAlt="Women's Jiu Jitsu Classes"
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
      <TwoPartSection
        imageUrl="/assets/toronto-jiu-jitsu-lessons.jpg"
        imageAlt="Toronto Jiu Jitsu Lessons"
        title=""
        content="This is the ethos of Freestyle Dojo, to remove the labels and the dogma of the past, do away with silly dated representations of respect and honor and focus solely on the art of Submission Grappling. \n New to Jiu Jitsu? No problem. Our coaches are well suited to running a class that caters to all skill levels. Just let us know your experience when you arrive and let us do the rest. Our adult Jiu Jitsu classes are for all practitioners and consist of drills, live drills, and sparring."
        buttonText="Start Today"
        buttonLink="/book-a-class"
      />
    </Layout>
  );
};

export default JiuJitsuClassesPage;
