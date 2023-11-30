import '../components/Background/Background.css'
import Header from '../components/Header/Header';
import Menus from '../components/Menus/Menus'
import Schedule from './Schedule';
import Programs from './Programs';
import About from './About';
import FlyInSection from '../components/FlyInSection/FlyInSection';
import NoGiSection from '../components/NoGiSection/NoGiSection';
import GoogleReviews from '../components/GoogleReviews/GoogleReviews';
import TrialClassForm from '../components/FreeTrial/FreeTrial';
import TwoPartSection from '../components/TwoPartSection/TwoPartSection';
import Footer from '../components/Footer/Footer';


const Home = () => {
    return (
        <>
        <div className='background'>
            <div className='background-overlay'></div>
            <Header />
            <Menus /> 
            <FlyInSection />
        </div>
        <Schedule />
        <Programs />
        <About />
        <NoGiSection />
        <GoogleReviews />
        <TrialClassForm />
        <TwoPartSection 
        imageUrl="/src\assets\toronto-martial-arts-gym-rental-scaled.jpg" 
        imageAlt="Training Space" 
        title="LOOKING FOR A SPACE TO TRAIN YOUR CLIENTS?" 
        content="We have the most affordable rates on our mat spaces and gym rentals in Toronto. We offer a flat fee, plus competitive rates for other industries looking to rent a location. Contact us for a quote and more information on how to book your time." 
        buttonText="Get a Quote" />
        <Footer />
        </>
    )
};

export default Home