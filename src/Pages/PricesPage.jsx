
import Layout from '../Layout'; // Import the Layout component
import TwoPartSection from "../Sections/TwoColumns";

const PricesPage = () => {
  // Define page-specific properties for the Top component
  const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "our membership prices",
    subtitle: "are the lowest in Toronto",
    buttons: [
      { label: "sign up", action: "https://clients.mindbodyonline.com/ASP/main_shop.asp?stype=43&pMode=4&reSchedule=&origId=&recType=&recNum=" },
    ],
  };

  const data = {
    adults: [
      { period: "Week", price: "$40" },
      { period: "Month", price: "$160" },
      { period: "Year (10% off)", price: "$1728" }
    ],
    kids: [
      { period: "3 months", price: "$375" },
      { period: "6 months", price: "$750" },
      { period: "12 months", price: "$1350" }
    ],
    passes: [
      { period: "1", price: "$20" },
      { period: "10", price: "$180" },
      { period: "20", price: "$350" }
    ]
  };

  return (
    <Layout topProps={topProps}>
      <TwoPartSection
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - lowest prices in Toronto"
        title="Affordable and Transparent Pricing at Freestyle Dojo"
        content="Are you interested in starting your Brazilian Jiu-Jitsu journey but concerned about high costs at other gyms? At Freestyle Dojo, we&apos;re committed to making BJJ accessible to everyone by offering straightforward and budget-friendly pricing options. We believe that quality training should be affordable and accessible to all enthusiasts, so we&apos;ve designed our pricing structure with you in mind."
        buttonText=""
        buttonLink=""
      />
      <TwoPartSection
        reversed={true}
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - lowest prices in Toronto"
        title="Our Pricing"
        content="At Freestyle Dojo, we keep it simple. We offer one fixed price that covers everything you need to get started on your BJJ journey. No hidden fees, no surprises—just an affordable way to learn and train. Here&apos;s what you can expect:\nOne Fixed Price: We offer a single monthly membership fee that grants you unlimited access to all our classes. Whether you want to train once a week or every day, our pricing remains the same.\nNo Belt Testing Fees: We believe that belt promotions should be based on your dedication and progress, not on additional fees. That's why we do not charge any belt testing fees. Your growth in BJJ is recognized and celebrated without extra costs.\nNo Uniform Costs: As a No-Gi gym, we understand that traditional BJJ uniforms (gis) can be costly. You won't need to invest in specialized clothing when training with us. Comfortable athletic wear is all you need to get started."
        buttonText=""
        buttonLink=""
      />
      <TwoPartSection
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - lowest prices in Toronto"
        title="Why choose Freestyle Dojo?"
        content="Affordability: We are committed to offering you affordable training options without compromising on quality. Our transparent pricing ensures that you get the most value for your money.\nUnlimited Access: Train at your own pace and convenience with unlimited access to our classes. Whether you're a beginner or experienced practitioner, you'll find the flexibility to fit BJJ into your schedule.\nInclusivity: We welcome students of all skill levels, backgrounds, and ages. Our gym is a supportive and inclusive community where you can grow and learn alongside fellow enthusiasts."
        buttonText=""
        buttonLink=""
      />

      <div className="prices-section">
        <div className="price-header-content">
          <h2>TORONTO NO GI CLASSES</h2>
        </div>
        <div className='main-content'>
          <div className='price-text-content'>
            <table className='pricing-table'>
              <tbody>
                {Object.entries(data).map(([category, items]) => (
                  <>
                    <tr key={category}>
                      <th>{category.toUpperCase()}</th>
                    </tr>
                    {items.map(item => (
                      <tr key={item.period}>
                        <td>{item.period} - {item.price}</td>
                      </tr>
                    ))}
                  </>
                ))}
                <tr key="divider"><td>&nbsp;</td></tr>
                <tr key="tax">
                  <td>* plus applicable taxes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <TwoPartSection
        reversed={true}
        imageUrl="/assets/FS-LOGO.png"
        imageAlt="Freestyle Dojo - lowest prices in Toronto"
        title="Join Us Today"
        content="Ready to embark on your Brazilian Jiu-Jitsu journey without breaking the bank? Join Freestyle Dojo and experience high-quality training with affordable pricing. Whether your goal is self-improvement, competition, or simply staying active, we have a place for you in our BJJ family.\nDon&apos;t miss out on this opportunity to start your BJJ journey with a gym that values your growth and affordability. Contact us today to learn more and sign up for your first class. We can&apos;t wait to welcome you to the Freestyle Dojo family!\n&nbsp;"
        buttonText="Join Now"
        buttonLink="https://clients.mindbodyonline.com/ASP/main_shop.asp?stype=43&pMode=4&reSchedule=&origId=&recType=&recNum="
      />



    </Layout>
  );
};

export default PricesPage;
