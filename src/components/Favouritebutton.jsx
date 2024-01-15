import { useState } from "react";
import PropTypes from "prop-types";
import favouriteImg from "../img/favourite.svg";
import favouriteTrue from "../img/favourite_true.svg";

function Button({ id, onFavouriteClick }) {
  const [clicked, setClicked] = useState(false);

  const handleFavourite = (event) => {
    setClicked(!clicked);
    onFavouriteClick({ id, html: event.currentTarget.parentElement.parentElement.parentElement.outerHTML });
  };

  return (
    <button onClick={handleFavourite} className="fav_btn">
      <img src={clicked ? favouriteTrue : favouriteImg} alt="favourite" />
    </button>
  );
}

Button.propTypes = {
  onFavouriteClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Button;
