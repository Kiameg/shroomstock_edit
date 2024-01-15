import StepsComp from "./StepsComp.jsx"
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"
import "../css/style.css";
import "../css/booking.css";

function Booking() {
  return (
    <><Nav/><main>
      
        <section>
          <h1>Booking</h1>
            <StepsComp/>
        </section>
      
    </main>
    <Footer/></>
  );
}

export default Booking;

