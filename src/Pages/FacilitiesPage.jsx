
import Layout from '../Layout'; // Import the Layout component
import TwoPartSection from "../Sections/TwoColumns";

const FacilitiesPage = () => {
  // Define page-specific properties for the Top component
  const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "Our Modern and Welcoming Facilities",
    subtitle: "located at Toronto`s west end",
    buttons: [
      { label: "Schedule a tour", action: "/contact-free-trial-class" },
    ],
  };

  return (
    <Layout topProps={topProps}>
      <TwoPartSection
        reversed={true}
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - clean training facilities"
        title="Welcome to Freestyle Dojo"
        content="Freestyle Dojo is your destination for Brazilian Jiu-Jitsu in a clean, modern, and inviting environment. We believe that the right training space can significantly impact your BJJ journey, and we&apos;ve created an atmosphere that fosters learning, hygiene, and a sense of community."
        buttonText=""
        buttonLink=""
      />
      <TwoPartSection
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - lowest prices in Toronto"
        title="Our Facilities"
        content="At Freestyle Dojo, we take pride in offering top-notch facilities that cater to your comfort and well-being. Here&apos;s what sets us apart:\nAbove-Ground Space: Say goodbye to dimly lit basements or cramped corners. Our gym is located in a bright and spacious above-ground setting, providing a welcoming and well-ventilated space for your training.\nPremium Mats: Your safety and training experience matter to us. That&apos;s why we&apos;ve invested in high-quality mats that are not only comfortable but also durable. No puzzle mats falling apart here; we&apos;ve got you covered.\nShowers: Hygiene is essential in Brazilian Jiu-Jitsu. After an intense training session, you&apos;ll appreciate our on-site showers. Freshen up and feel your best before heading home or back to your day-to-day activities.\nCommunity Space: Our gym isn&apos;t just a place to train; it&apos;s a space to connect with fellow enthusiasts. Relax, socialize, and exchange experiences in our comfortable and welcoming space."
        buttonText=""
        buttonLink=""
      />
      <TwoPartSection
        reversed={true}
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - welcoming space for all"
        title="Why Choose Freestyle Dojo?"
        content="Cleanliness: We maintain a high standard of cleanliness throughout our facilities. You can step onto our mats with confidence, knowing that they are regularly sanitized and well-maintained.\nComfort: Your comfort is our priority. We&apos;ve designed our space to ensure that you can focus on your training without distractions or discomfort.\nCommunity: At Freestyle Dojo, you&apos;re not just a member; you&apos;re part of a welcoming and supportive community. Connect with like-minded individuals who share your passion for BJJ."
        buttonText=""
        buttonLink=""
      />
      <TwoPartSection
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - visit us today at Toronto's west end"
        title="Visit Us Today"
        content="Experience the difference of training in a clean, welcoming, and above-ground space. Join Freestyle Dojo and discover why our facilities set us apart in the world of Brazilian Jiu-Jitsu.\nWhether you&apos;re a beginner looking for a comfortable learning environment or an experienced practitioner seeking a fresh start, we invite you to visit us and explore our modern facilities. Contact us today to schedule a tour and see firsthand why Freestyle Dojo is the perfect place to pursue your BJJ goals.\n&nbsp;"
        buttonText="Schedule a tour"
        buttonLink="/contact-free-trial-class"
      />
    </Layout>
  );
};

export default FacilitiesPage;
