import { useState } from "react";
import PropTypes from "prop-types";

export default function WishInput({ setWishes }) {
  const [newWish, setNewWish] = useState("");

  const sendNewWish = () => {
    const nuevodeseo = {
      id: Date.now(),
      text: newWish,
      done: false,
    };
    document.getElementById("input").value = "";
    setWishes(nuevodeseo);
  };

  return (
    <fieldset id="new wishes" className="wish-input">
      <p>
        <input
          id="input"
          type="text"
          className="wish-input__field"
          placeholder="Introduce tu deseo"
          onChange={(e) => setNewWish(e.target.value)}
        />
      </p>
      <p>
        <button className="wish-clear" onClick={sendNewWish}>
          add wish
        </button>
      </p>
      <legend className="wish-input__label">Adding new whishes</legend>
    </fieldset>
  );
}

WishInput.propTypes = {
  setWishes: PropTypes.func.isRequired,
};
