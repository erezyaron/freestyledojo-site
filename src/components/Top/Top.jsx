import Header from "../Header/Header";
import Menus from "../Menus/Menus";
import FlyInSection from "../FlyInSection/FlyInSection";
import Background from "../Background/Background";
import PropTypes from "prop-types";

const Top = ({ bgImage, title, subtitle, buttons }) => {
  Top.propTypes = {
    bgImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.node,
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
