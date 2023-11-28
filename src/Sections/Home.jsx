import '../components/Background/Background.css'
import Header from '../components/Header/Header';
import Menus from '../components/Menus/Menus'
import Schedule from './Schedule';
import Programs from './Programs';
import About from './About';
import GymRentals from './GymRentals';
import FlyInSection from '../components/FlyInSection/FlyInSection';
import NoGiSection from '../components/NoGiSection/NoGiSection';
import GoogleReviews from '../components/GoogleReviews/GoogleReviews';

const Home = () => {
    return (
        <>
        <div className='background'>        
            <Header />
            <Menus />
            <FlyInSection />
        </div>
        <Schedule />
        <Programs />
        <About />
        <NoGiSection />
        <GoogleReviews />
        <GymRentals />
        </>
    )
};

export default Home