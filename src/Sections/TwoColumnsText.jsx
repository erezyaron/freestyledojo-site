import './TwoColumnsText.css'; // Assuming you have a corresponding CSS file for styling

const TwoColumnsText = ({ ltitle, lsubtitle, leftText, rtitle, rsubtitle, rightText }) => {
    const lparagraphs = leftText
    .split("\\n")
    .map((item, i) => <p key={i}>{item}</p>);
    const rparagraphs = rightText
    .split("\\n")
    .map((item, i) => <p key={i}>{item}</p>);

  return (
    <>
    <div className='section'>
    {ltitle && <h3>{ltitle}</h3>}
    <div className="two-part-container">
      <div className="left-container">
        <div className="inner-container">
        {lsubtitle && <h4>{lsubtitle}</h4>}
        {lparagraphs}
        </div>
      </div>
      <div className="right-container">
        <div className="inner-container">
        {rtitle && <h3>{rtitle}</h3>}
        {rsubtitle && <h4>{rsubtitle}</h4>}
        {rparagraphs}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default TwoColumnsText;
