import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import Layout from '../Layout'; // Import the Layout component

const BookAClassPage = () => {
   // Define page-specific properties for the Top component
   const topProps = {
    bgImage: "/assets/jiu-jitsu-class-toronto-scaled.webp",
    title: "MMA & Jiu Jitsu Classes",
    subtitle: "an innovative martial arts gym in toronto",
    buttons: [
        { label: "Schedule", action: "/schedule" }
    ],
  };
  const [isScriptLoaded, setScriptLoaded] = useState(false);
  const [widgetKey, setWidgetKey] = useState(0);
  const location = useLocation();
  const loadScript = (scriptUrl) => {
    if (!isScriptLoaded) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        setScriptLoaded(true);
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  };

  useEffect(() => {
    loadScript('https://widgets.mindbodyonline.com/javascripts/healcode.js');
    setWidgetKey(prevKey => prevKey+1);
  }, [ location]);

  return (
    <Layout topProps={topProps}>
      <div className="menu-button">
        <h2>Sign Up for Your Next Class</h2>
      </div>
      <ErrorBoundary>
        <healcode-widget key={widgetKey} data-type="schedules" data-widget-partner="object" data-widget-id="381652810d7d" data-widget-version="1"></healcode-widget>
      </ErrorBoundary>
    </Layout>
  );
};

export default BookAClassPage;
