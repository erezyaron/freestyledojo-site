import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <>
        <div id="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="/src/assets/toronto-martial-arts-classes-scaled.jpg" className="about-image" />
                </div>
                <div className="about-text">
                    <h3>Toronto&apos;s Martial Arts Gym</h3>
                    <h4>Our mission at freestyle dojo</h4>
                    <p className="about-item text">
                    At Freestyle our mission is to provide you and our community with world-class martial arts instruction. We do so in an environment that is welcoming, whether you are trying martial arts for the 1st time or already an advanced practitioner.
                    </p>
                    <p className="about-item text">
                    Located in the heart of Toronto’s West End, our dojo offers the best classes in a range of martial arts disciplines. Our expert instructors specialize in teaching Jiu Jitsu, Kickboxing, Fitness & Conditioning Classes – For Both Kids & Adults. 
                    </p>
                    <p className="about-item text">
                    All of our classes start with a free trial so you can try our dojo out and see if it is the right fit for you and your goals!
                    </p>
                    <div className="about-item button">
                        <FontAwesomeIcon className='icon' icon={faChevronRight} />
                        Book a trial class today
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default About