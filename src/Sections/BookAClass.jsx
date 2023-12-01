import Header from "../components/Header/Header";
import Menus from "../components/Menus/Menus";
import { useEffect } from 'react';
import React from 'react';
import Footer from "../components/Footer/Footer";

const BookAClass = () => {
  const useExternalScript = (scriptUrl) => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, [scriptUrl]);
  };
  useExternalScript('https://widgets.mindbodyonline.com/javascripts/healcode.js');
  return (
    <>
    <p>&nbsp;</p>
        <Header />
        <Menus />
        <div className="menu-button">
          <h2>Sign Up for Your Next Class</h2>
          </div>
        
        <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="381652810d7d" data-widget-version="1"></healcode-widget>
      <Footer />
    </>
  );
};

export default BookAClass;
