import "../css/style.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <nav>
        <Link to="/"><img className="nav_logo" src={logo} alt="logo" /></Link>
        <h2>MENU</h2>
      </nav>
    </>
  );
}

export default Index;
