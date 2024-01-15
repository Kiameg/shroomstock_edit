import "../css/billinginfo.css";
import "../css/style.css";

import PropTypes from 'prop-types';

function BillingForm({setBillingInfo}) {

    return (
      <form className="grid_billing_form">
        <div className="grid_billing">
        <label htmlFor="firstname" key="firstname">First Name</label>
        <input className="billing_input" type="text" id="firstname" onChange={event => setBillingInfo("firstname", event.target.value)} name="firstname" required/>

        <label htmlFor="lastname" key="lastname">Last Name</label>
        <input className="billing_input" type="text" id="lastname" onChange={event => setBillingInfo("lastname", event.target.value)} name="lastname" required/>

        <label htmlFor="address" key="address">Address</label>
        <input className="billing_input" type="text" id="address" onChange={event => setBillingInfo("address", event.target.value)} name="address" required/>
        </div>
        <div className="grid_billing2">
          <div className="grid_billing2_small">
        <label htmlFor="zipcode" key="zipcode">Zip Code</label>
        <input className="billing_input" type="number" min="1000" max="9999" id="zipcode" onChange={event => setBillingInfo("zipcode", event.target.value)} name="zipcode" required/>
        </div>
        <div className="grid_billing2_small">
        <label htmlFor="city" key="city">City</label>
        <input className="billing_input" type="text" id="city" onChange={event => setBillingInfo("city", event.target.value)} name="city" required/>
        </div>
        </div>
        <div className="grid_billing">  
        <label htmlFor="email" key="email">Email</label>
        <input className="billing_input" type="email" id="email" onChange={event => setBillingInfo("email", event.target.value)} name="email" required/>

        <label htmlFor="repeat" key="repeat">Repeat email</label>
        <input className="billing_input" type="email" id="repeat" onChange={event => setBillingInfo("repeat", event.target.value)} name="repeat" required/>

        <label htmlFor="phone" key="phone">Phone</label>
        <input className="billing_input" type="tel" id="phone" onChange={event => setBillingInfo("phone", event.target.value)} name="phone" required/>
        </div>
      </form>




    );
    
  }
  
  BillingForm.propTypes = {
    setBillingInfo: PropTypes.func,
  }
  
  export default BillingForm;
  