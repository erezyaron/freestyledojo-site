
import Header from '../Header/Header';
import PropTypes from "prop-types";
import Menus from "../Menus/Menus";
import FlyInSection from "../FlyInSection/FlyInSection";
import Background from "../Background/Background";

const Top = ({ bgImage, title, subtitle, buttons }) => {
    Top.propTypes = {
      bgImage: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      buttons: PropTypes.array,
    };
    return (
      <>
        <Background bgImage={bgImage}>
          <Header />
          <Menus />
          <FlyInSection title={title} subtitle={subtitle} buttons={buttons} />
        </Background>
      </>
    );
  };
  
  export default Top;
  