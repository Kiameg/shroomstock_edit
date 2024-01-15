// import "./titles.css";
import InfoForm from "./InfoForm";
import Basket from "./Basket";
import PropTypes from 'prop-types'
import "../css/purchase.css";
import "../css/info.css"
import "../css/style.css"

function InfoStepContent({participantsTotal, setNameList}) {
  return (
    <div className="grid_purchase">
      <div className="info_left">
        <h2>Information</h2>
        <h6>Type in full name of each participant.</h6>
        <InfoForm participantsTotal={participantsTotal} setNameList={setNameList} />
      </div>
      <Basket/>
    </div>
  );
}

InfoStepContent.propTypes = {
    participantsTotal: PropTypes.number,
    setNameList: PropTypes.func,
}

export default InfoStepContent;
