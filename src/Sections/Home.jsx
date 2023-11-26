import '../components/Background/Background.css'
import Header from '../components/Header/Header';
import Menus from '../components/Menus/Menus'
import Schedule from './Schedule';
import Programs from './Programs';
import About from './About';
import GymRentals from './GymRentals';
import FlyInSection from '../components/FlyInSection/FlyInSection';

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
        <GymRentals />
        </>
    )
};

export default Home