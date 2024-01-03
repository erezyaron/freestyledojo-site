import {useState, useEffect} from 'react';
import './NoGiSection.css'; // Make sure to create and import the CSS file

const words = ['stronger','faster','healthier'];
const NoGiSection = () => {
    const [highlightedWord, setHighlightedWord] = useState(words[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setHighlightedWord((prevWord) => {
            const wordIndex = (words.indexOf(prevWord) + 1) % words.length;
            return words[wordIndex];
          });
        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(intervalId); // Clean up the interval on component unmount
      }, []);
    

  return (
    <div className="no-gi-section">
      <div className="header-content">
        <h2>TORONTO NO GI CLASSES</h2>
        <h3>HELPING YOU GET <span className="highlight">{highlightedWord}</span></h3>
        <div className="divider"><span className="divider-separator"></span></div>
      </div>
      <div className='main-content'>
        <div className='text-content'>
        <p>Freestyle Dojo, located in the west end of Toronto, specializes in No-gi Jiu Jitsu, as we feel that this is more relevant to the modern era of grappling. In order to take a mixed martial artist to the professional level, it’s imperative to focus on building skill in submission wrestling. Newcomers to Jiu Jitsu will benefit from our coaches commitment to staying relevant in a sport that is constantly evolving.</p>
        </div>
      <div className="video-content">
      <iframe
          className="no-gi-video"
          src="https://streamable.com/e/s0rwcx?autoplay=0&amp;loop=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="No-Gi Classes Video"
          ></iframe>
      </div>
    </div>
    </div>
  );
};

export default NoGiSection;
