import Bands from "./Bands";
import Nav from "./Nav";
import Footer from "./Footer";
import blueScene from "../img/blue_flower.svg";
import pinkScene from "../img/pink_flower.svg";
import yellowScene from "../img/yellow_flower.svg";
import "../css/style.css";
import "../css/program.css";

function Index() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <h1 className="program_h1">Program</h1>
        <section className="scene_colors">
          <div className="tooltip">
            <span className="tooltiptext">Each color represents a scene. Check the color in the band photos top left corner.</span>
            <img className="scene_color" src={pinkScene} alt="scene colors" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">Each color represents a scene. Check the color in the band photos top left corner.</span>
            <img className="scene_color" src={yellowScene} alt="scene colors" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">Each color represents a scene. Check the color in the band photos top left corner.</span>
            <img className="scene_color" src={blueScene} alt="scene colors" />
          </div>
        </section>
        <section className="scenes">
          <h3>Pink Scene</h3>
          <h3>Yellow Scene</h3>
          <h3>Blue Scene</h3>
        </section>
        <Bands></Bands>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Index;
