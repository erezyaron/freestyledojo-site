import React from 'react';
import './TwoPartSection.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TwoPartSection = ({ imageUrl, imageAlt, title, content, buttonText }) => {
    return (
        <>
        <div className='section'>
        <div className='two-part-container'>
            <div className='left-container'>
            <div className='inner-container'>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className='inner-button-container'>
            <div className='inner-button'>
            <button>{buttonText}</button>
            </div>
            </div>
            </div>
            </div>
            <div className='right-container'>
            <img src={imageUrl} alt={imageAlt} />
            </div>
        </div>
        </div>
        </>
    )
}

export default TwoPartSection;
