
import Layout from '../Layout'; // Import the Layout component
import TwoPartSection from "../Sections/TwoColumns";

const EventsPage = () => {
   // Define page-specific properties for the Top component
   const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "guest instructors once a year",
    subtitle: "Upcoming events",
    buttons: [
      { label: "sign up", action: "https://clients.mindbodyonline.com/ASP/main_shop.asp?stype=43&pMode=4&reSchedule=&origId=&recType=&recNum=" },
    ],
  };

  return (
    <Layout topProps={topProps}>
      <TwoPartSection
        imageUrl="/assets/JORDAN-PREISINGER.png"
        imageAlt="Jordan Preisinger - Jordan Teaches Jiu Jitsu"
        title="Jordan Teaches Jiu Jitsu"
        content="Come learn from Jordan Preisinger, famous YouTuber from Jordan Teaches Jiu Jitsu.\nOct 1st, 2023"
        buttonText="Sign Up"
        buttonLink="https://clients.mindbodyonline.com/ASP/main_shop.asp?stype=43&pMode=4&reSchedule=&origId=&recType=&recNum="
      />
    </Layout>
  );
};

export default EventsPage;
