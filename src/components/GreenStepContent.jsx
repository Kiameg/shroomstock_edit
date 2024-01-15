// import "./titles.css";
import GreenForm from "./GreenForm";
import PropTypes from 'prop-types'
import Basket from "./Basket";
import "../css/purchase.css";
import "../css/green.css";
import "../css/style.css";

function GreenStepContent({setGreen, green}) {
  return (
    <div className="grid_purchase">
      <div className="greenform_content">
        <h2>Green Camping</h2>
        <h6>Camping spot in green area</h6>
        <p>Do you want to join a festival and help save the planet at the same time? Add our Green Camping option that financial compensate.</p>
        <h5 className="green_price">249,- pr. ticket</h5>
        <GreenForm setGreen={setGreen} green={green}/>
      </div>
      <Basket/>
    </div>
  );
}

GreenStepContent.propTypes = {
    setGreen: PropTypes.func,
    green: PropTypes.bool,
}

export default GreenStepContent;
