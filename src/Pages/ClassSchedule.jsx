
import Layout from '../Layout'; // Import the Layout component
import WeeklyCalendar from '../Schedule/Schedule';

const ClassSchedulePage = () => {
   // Define page-specific properties for the Top component
   const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "MMA & Jiu Jitsu Classes",
    subtitle: "an innovative martial arts gym in toronto",
    buttons: [
        { label: "free trial class", action: "/contact-free-trial-class" },
        { label: "seminars", action: "/events" },
        { label: "book a class", action: "/book-a-class" },
  ],
  };

  return (
    <Layout topProps={topProps}>
      <WeeklyCalendar />
    </Layout>
  );
};

export default ClassSchedulePage;
