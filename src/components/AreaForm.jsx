import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import "../css/areas.css";
import "../css/style.css";

const loadList = async (setAvailableAreas, setIsLoading) => {
  const response = await fetch("https://shroomstockfestival.glitch.me/available-spots")
  const list = await response.json()
  console.log(list)
  setAvailableAreas(list)
  setIsLoading(false)
}

function AreaForm({setArea, ticketsWanted}) {
  const [isLoading, setIsLoading] = useState(true)
  const [availableAreas, setAvailableAreas] = useState([])
  useEffect(() => {
    loadList(setAvailableAreas, setIsLoading)
  }, [])

  return (
    <>
      { isLoading && <div key="form-loading">Loading</div> }
      {
        !isLoading && <form key="form-ready" className="grid_area">
        { availableAreas.map((area, index) => (<>
          <div className="selecetor">
            <label className="area_label"tabIndex={index+1} htmlFor={`area-${index}`} key={area.id}><h5 className="areas_h5">{ area.area }</h5></label>
            <input className="area_input" disabled={area.available < ticketsWanted} key={area.id} type="radio" id={`area-${index}`} onChange={event => setArea(event.target.value)} name="area" value={area.area} required/>
            </div>
        </>))
        }
        </form>
        
      }
    
    </>
    
  );
}

AreaForm.propTypes = {
    setArea: PropTypes.func,
    ticketsWanted: PropTypes.number,
}

export default AreaForm;
