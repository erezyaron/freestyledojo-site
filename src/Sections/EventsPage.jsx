import TwoPartSection from "../components/TwoPartSection/TwoPartSection";
import Footer from "../components/Footer/Footer";
import Top from "../components/Top/Top";

const EventsPage = () => {
  return (
    <>
      <Top
        bgImage={"/assets/jiu-jitsu-class-toronto-scaled.webp"}
        title={"guest instructors once a year"}
        subtitle={"Upcoming events"}
        buttons={[
          { label: "Sign Up", action: "https://clients.mindbodyonline.com/ASP/main_shop.asp?stype=43&pMode=4&reSchedule=&origId=&recType=&recNum=" },
        ]}
      />
      <TwoPartSection
        imageUrl="/assets/JORDAN-PREISINGER.png"
        imageAlt="Jordan Preisinger - Jordan Teaches Jiu Jitsu"
        title="Jordan Teaches Jiu Jitsu"
        content="Come learn from Jordan Preisinger, famous YouTuber from Jordan Teaches Jiu Jitsu.\nOct 1st, 2023"
        buttonText="Sign Up"
        buttonLink="https://clients.mindbodyonline.com/ASP/main_shop.asp?stype=43&pMode=4&reSchedule=&origId=&recType=&recNum="
      />
      <Footer />
    </>
  );
};

export default EventsPage;
