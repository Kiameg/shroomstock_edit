// Importerer nødvendige moduler og aktiver
import "../css/bandinfo.css";
import blueScene from "../img/blue_flower.svg";
import pinkScene from "../img/pink_flower.svg";
import yellowScene from "../img/yellow_flower.svg";
import spotifyImg from "../img/spotify.svg";
import closeIcon from "../img/closesymbol.svg";
import favouriteImg from "../img/favourite.svg";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

// Bandinfo er en funktionel komponent, der viser information om et band
function Bandinfo({ openModal, closeModal, slug, sceneData, clickedIndex }) {
  // Bruger React hooks til at oprette ref og state variabler
  const ref = useRef();
  const [data, setData] = useState([]);
  const [sceneImgSrc, setSceneImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Bruger useEffect hook til at udføre sideeffekter
  useEffect(() => {
    // Vælger scenen baseret på sceneindekset
    if (sceneData[clickedIndex]?.scene === 0) {
      setSceneImgSrc(pinkScene);
    } else if (sceneData[clickedIndex]?.scene === 1) {
      setSceneImgSrc(yellowScene);
    } else if (sceneData[clickedIndex]?.scene === 2) {
      setSceneImgSrc(blueScene);
    }

    // Henter data fra API, når openModal ændres
    if (openModal) {
      setIsLoading(true);
      fetch(`https://shroomstockfestival.glitch.me/bands/${slug}`, {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (bands) {
          setData(bands);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal, slug, sceneData, clickedIndex, sceneImgSrc]);

  // Returnerer en dialog, der indeholder bandinformation
  return (
    <dialog ref={ref} onCancel={closeModal}>
      {isLoading ? (
        <></>
      ) : (
        <div className="dialog-div">
          <button className="closeSymbol" onClick={closeModal}>
            <img src={closeIcon} alt="" />
          </button>
          <section className="flex-con">
            <img className="bandimg" src={data && data.logo && data.logo.startsWith("https") ? data.logo : "https://shroomstockfestival.glitch.me/logos/" + data.logo} alt="" />
            <section className="p_section">
              <div className="flowerdiv">
                <img className="flower" src={sceneImgSrc} alt="" />
              </div>
              <p>
                {sceneData[clickedIndex]?.start} - {sceneData[clickedIndex]?.end}
              </p>
            </section>
            <section className="smallIcons">
              <img src={spotifyImg} alt="" />
              <img src={favouriteImg} alt="" />
            </section>
          </section>
          <section>
            <h3>{data && data.name}</h3>
            <h4>{data && data.genre}</h4>
            <p>{data && data.bio}</p>
          </section>
        </div>
      )}
    </dialog>
  );
}

// PropTypes bruges til typekontrol af props
Bandinfo.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  sceneData: PropTypes.array,
  clickedIndex: PropTypes.number,
};

export default Bandinfo;
