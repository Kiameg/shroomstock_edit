import PropTypes from 'prop-types';
import "../css/green.css";
import "../css/style.css";


function GreenForm({setGreen, green}) {

  return (
    <form className="greenform">
            <label htmlFor="greenCompingChoice">Yes please!</label>
            <input type="checkbox" id="greenCompingChoice" name="greenCompingChoice" checked={green} onChange={() => setGreen(!green)}></input>
    </form>

  );
  
}

GreenForm.propTypes = {
    setGreen: PropTypes.func,
    green: PropTypes.bool,
}

export default GreenForm;
