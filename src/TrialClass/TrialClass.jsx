import './TrialClass.css'
import './TrialForm'
import PropTypes from 'prop-types'
import ContactForm from './TrialForm';

const TrialClass = ({title, content, showBullets}) => {
    TrialClass.propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        showBullets: PropTypes.bool,
    };
    const paragraphs = content.split("\\n").map((item,i)=><p key={i}>{item}</p>);
    return (
        <>
        <div id="TrialClass" className='trial-class-section'>
            <div className='trial-class-info'>
                <h2 className='trial-class-info-title'>{title}</h2>
                <div className='trial-class-info-text'>
                {paragraphs}
                </div>
                {showBullets && (
                    <ul className='trial-list'>
                        <li className='trial-list-item'>
                            <span className='trial-list-icon'>
                                <i className='fa-solid fa-angle-right'></i>
                            </span>
                            <span className='trial-list-text'>Jiu Jitsu Classes</span>
                        </li>
                        <li className='trial-list-item'>
                            <span className='trial-list-icon'>
                                <i className='fa-solid fa-angle-right'></i>
                            </span>
                            <span className='trial-list-text'>MMS Classes</span>
                        </li>
                        <li className='trial-list-item'>
                            <span className='trial-list-icon'>
                                <i className='fa-solid fa-angle-right'></i>
                            </span>
                            <span className='trial-list-text'>Fitness Classes</span>
                        </li>
                        <li className='trial-list-item'>
                            <span className='trial-list-icon'>
                                <i className='fa-solid fa-angle-right'></i>
                            </span>
                            <span className='trial-list-text'>Kids Classes</span>
                        </li>
                    </ul>
                )}
            </div>
            <ContactForm />
        </div>
        </>
    );
}

export default TrialClass