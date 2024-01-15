import "../css/style.css";
import "../css/tents.css";

import PropTypes from 'prop-types';

function TentForm({setSmallTents, setBigTents, maxTents}) {
  return (
    <form className="grid_tents_form">
    <div className="grid_tents">
        <label htmlFor="quantitySmallTent">2 person tent</label>
        <input className="tents_small_input" type="number" id="quantitySmallTent" name="quantitySmallTent" min="0" max={maxTents} onChange={event => setSmallTents(parseInt(event.target.value))} required></input>
    </div>
    <div className="grid_tents">
        <label htmlFor="quantityBigTent">3 person tent</label>
        <input className="tents_big_input" type="number" id="quantityBigTent" name="quantityBigTent" min="0" max={maxTents} onChange={event => setBigTents(parseInt(event.target.value))} required></input>
    </div>
    </form>
  );
}

TentForm.propTypes = {
    setSmallTents: PropTypes.func,
    setBigTents: PropTypes.func,
    maxTents: PropTypes.number,
}

export default TentForm;
