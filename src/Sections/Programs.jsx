const Programs = () => {
    return (
        <>
        <div id="programs">
        <h2>Toronto Martial Arts Classes</h2>
      <h3>Find the Right Martial Arts Program for You</h3>
      <div className="programs-container">
      <a href="/toronto-jiu-jitsu-classes" className="program-item-link"><div className="program-item jiu-jitsu"><div className="program-text">JIU JITSU</div></div></a>
        <a href="/toronto-kickboxing-classes" className="program-item-link"><div className="program-item kickboxing"><div className="program-text">KICKBOXING</div></div></a>
        <a href="/toronto-fitness-classes" className="program-item-link"><div className="program-item fitness"><div className="program-text">FITNESS</div></div></a>
        <a href="/toronto-kids-martial-arts" className="program-item-link"><div className="program-item kids"><div className="program-text">KIDS</div></div></a>
      </div>
        </div>
        </>
    )
};

export default Programs