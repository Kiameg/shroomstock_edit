import PropTypes from 'prop-types';
import "../css/billinginfo.css";
import "../css/style.css";

function PaymentForm({setPaymentChoice, paymentChoice, setPaymentInfo, setTerms, terms}) {
  console.log(terms)
  return (
    <div>
      <form className='payment_methods'>
        <div className='payment_method1'>
        <label htmlFor="">Creditcards</label>
        <input className='payment_method_input' key="creditcards" type="radio" id="creditcards" name="payment" onChange={() => setPaymentChoice("creditcards")}></input>
        </div>
        <div className='payment_method2'>
        <label htmlFor="">Mobilepay</label>
        <input className='payment_method_input' key="mobilepay" type="radio" id="mobilepay" name="payment" onChange={() => setPaymentChoice("mobilepay")} ></input>
        </div>
        </form>

        {paymentChoice === 'mobilepay' &&

          <div className="payment_info">
          <label htmlFor="phone" key="phone">Phone</label>
          <input className="payment_info_input" type="tel" id="phone" onChange={event => setPaymentInfo("phone", event.target.value)} name="phone" required/>
          <div className='termsform'>
          <label htmlFor="">Yes, I have read <span className='termsconditions'>terms and conditions</span></label>
          <input key="terms" type="checkbox" id="terms1" name="terms" checked={terms} onChange={() => setTerms(!terms)}></input>
          </div></div>
          }

        {paymentChoice === 'creditcards' && 
          <div className="payment_info">
            <label htmlFor="cartholdername" key="cartholdername">Cartholders  name</label>
            <input className="payment_info_input" type="text" id="cartholdername" onChange={event => setPaymentInfo("cartholdername", event.target.value)} name="cartholdername" required/>
            <label htmlFor="cartnumber" key="cartnumber">Cart number</label>
            <input className="payment_info_input" type="number" min="1000000000000000" max="9999999999999999" id="cartnumber" placeholder="XXXX XXXX XXXX XXXX" onChange={event => setPaymentInfo("cartnumber", event.target.value)} name="cartnumber" required/>
            <div className='payment_info_small'>
            <div className='payment_info_small1'>
            <label htmlFor="expdate" key="expdate">Exp. Date</label>
            <input className="payment_info_input" type="month" placeholder="MM/YY" id="expdate" onChange={event => setPaymentInfo("expdate", event.target.value)} name="expdate" required/>
            </div>
            <div className='payment_info_small2'>
            <label htmlFor="cvc" key="cvc">CVC</label>
            <input className="payment_info_input" type="number" id="cvc" min="100" max="999" placeholder="XXX" onChange={event => setPaymentInfo("cvc", event.target.value)} name="cvc" required/>
            </div>
            </div>
            <div className='termsform'>
            <label htmlFor="">Yes, I have read <span className='termsconditions'>terms and conditions</span></label>
          <input key="terms" type="checkbox" id="terms2" name="terms" checked={terms} onChange={() => setTerms(!terms)}></input>
          </div>
          </div>}

    </div>




  );
  }
  
  PaymentForm.propTypes = {
    setPaymentChoice: PropTypes.func,
    paymentChoice: PropTypes.string,
    setPaymentInfo: PropTypes.func,
    setTerms: PropTypes.func,
    terms: PropTypes.bool
  }
  
  export default PaymentForm;
  