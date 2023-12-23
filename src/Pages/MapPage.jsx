
import Layout from '../Layout'; // Import the Layout component
import TwoPartSection from "../Sections/TwoColumns";

const MapPage = () => {
   // Define page-specific properties for the Top component
   const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "West End Training location",
    subtitle: "Just north of the ttc green line",
    buttons: [
      { label: "get directions", action: "https://goo.gl/maps/sbaAUU82DKgeaX3L8", newwindow: true },
    ],
  };

  return (
    <Layout topProps={topProps}>
     <TwoPartSection
        imageUrl="/assets/map.png"
        imageAlt="Come find us at Dufferin and Dupont area"
        title="Discover Freestyle Dojo in the Heart of Toronto's West End"
        subtitle="Dufferin and Dupont area"
        content="Nestled between the bustling neighborhoods of the Junction, Wallace-Emerson, Davenport, and Dovercourt Village, Freestyle Dojo is at the epicenter of Toronto's West End. This area is renowned for its dynamic mix of cultures and communities, making it a melting pot of creativity and energy.\nJust north of the TTC subway's green line on Dufferin Street, our location offers easy accessibility and is surrounded by the area's unique charm. The West End, known for its rich immigrant history and vibrant community life, provides an eclectic backdrop to our dojo. From the quaint streets lined with diverse eateries and shops to the lively cultural festivals, this neighborhood embodies a spirit of inclusivity and evolution, much like the ethos of Freestyle Dojo."
      />
    </Layout>
  );
};

export default MapPage;
