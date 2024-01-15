import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { Button } from "antd";
import "../css/confirmation.css";
import "../css/style.css";


function Confetti() {
    const [isExploding, setIsExploding] = React.useState(false);
  
    const handleButtonClick = () => {
      setIsExploding(true);
    };

    return(
        <div className="confirmation">
        <h2>CONFIRMED BOOKING</h2>
        <h5>Get ready for a week of peace, love and music harmonies.</h5>
        <div><Button className="celebrate_button" onClick={handleButtonClick}>Celebrate here</Button>
        {isExploding && <ConfettiExplosion className='confetti' particleCount={300} height="500vh" width={4000} duration={3000} force={0.5}  />}
        </div>
        </div>
    );
}


export default Confetti;