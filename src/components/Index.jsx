import Nav from "./Nav";
import Footer from "./Footer";
import "../css/style.css";
import "../css/index.css";
import indeximg from "../img/festival_2.png";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="main_con">
      <Nav></Nav>
      <main>
        <div className="festival_con">
          <section className="festival_intro">
            <h2 className="index_h2">SHROOMSTOCK</h2>
            <h1 className="index_h1">FESTIVAL</h1>
            <h3 className="index_h3">17-23 / June / 2024</h3>
            <p>Transport yourself to the groovy era at our 70s festival, where bell-bottoms sway to the disco beats and flower power vibes rule the day!</p>
            <Link to="/booking">
              <button className="ticket_button">Get your ticket!</button>
            </Link>
            <p>
              See the full program{" "}
              <Link className="program_link" to="/program">
                here
              </Link>
            </p>
          </section>
          <section className="img_section">
            <img src={indeximg} alt="Front image" />
          </section>
        </div>
      </main>
      <Footer customClass={"footer_index"}></Footer>
    </div>
  );
}

export default Index;
