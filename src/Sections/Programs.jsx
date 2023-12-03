import { Link } from "react-router-dom";

const Programs = () => {
    return (
        <>
        <div id="programs">
        <h2>Toronto Martial Arts Classes</h2>
      <h3>Find the Right Martial Arts Program for You</h3>
      <div className="programs-container">
      <Link to="/toronto-jiu-jitsu-classes" className="program-item-link"><div className="program-item jiu-jitsu"><div className="program-text">JIU JITSU</div></div></Link>
        <Link to="/toronto-mma-classes" className="program-item-link"><div className="program-item mma"><div className="program-text">MMA</div></div></Link>
        <Link to="/toronto-fitness-classes" className="program-item-link"><div className="program-item fitness"><div className="program-text">FITNESS</div></div></Link>
        <Link to="/toronto-kids-martial-arts" className="program-item-link"><div className="program-item kids"><div className="program-text">KIDS</div></div></Link>
      </div>
        </div>
        </>
    )
};

export default Programs