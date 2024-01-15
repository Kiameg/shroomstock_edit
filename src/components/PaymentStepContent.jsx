// import "./titles.css";
import BillingForm from "./BillingForm";
import PaymentForm from "./PaymentForm";
import Basket from "./Basket";
import PropTypes from 'prop-types'
import "../css/purchase.css";
import "../css/billinginfo.css";
import "../css/style.css";

function InfoStepContent({setBillingInfo, setPaymentInfo, setPaymentChoice, paymentChoice, setTerms, terms}) {
  return (
    <div className="grid_purchase">
      <div className="billing_left">
        <h2>Billing</h2>
        <h6>Type in billing information</h6>
        <BillingForm setBillingInfo={setBillingInfo} />
        <h2>Payment</h2>
        <h6>Choose payment method</h6>
        <PaymentForm setPaymentInfo={setPaymentInfo} setPaymentChoice={setPaymentChoice} paymentChoice={paymentChoice} setTerms={setTerms} terms={terms}/>
      </div>
      <Basket/>
    </div>
  );
}

InfoStepContent.propTypes = {
    setBillingInfo: PropTypes.func,
    setPaymentInfo: PropTypes.func,
    setPaymentChoice: PropTypes.func,
    paymentChoice: PropTypes.string,
    setTerms: PropTypes.func,
    terms: PropTypes.bool
}

export default InfoStepContent;
