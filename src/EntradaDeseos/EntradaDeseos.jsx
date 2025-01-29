import { useState } from "react";
import PropTypes from "prop-types";

export default function EntradaDeseo({ onNuevoDeseo }) {
  const [nuevoDeseo, setNuevoDeseo] = useState("");

  const enviarNuevoDeseo = () => {
    if (!nuevoDeseo == "") {
      const nuevodeseo = {
        id: Date.now(),
        texto: nuevoDeseo,
        hecho: false,
      };
      document.getElementById("input").value = "";
      onNuevoDeseo(nuevodeseo);
      setNuevoDeseo("");
    }
  };
  // gsdfggsdfg
  // asdfasdadfa
  return (
    <fieldset id="new Deseos" className="Deseo-input">
      <p>
        <input
          id="input"
          type="texto"
          className="Deseo-input__field"
          placeholder="Introduce tu deseo"
          onChange={(e) => setNuevoDeseo(e.target.value)}
        />
      </p>
      <p>
        <button className="Deseo-clear" onClick={enviarNuevoDeseo}>
          add Deseo
        </button>
      </p>
      <legend className="Deseo-input__label">Adding new whishes</legend>
    </fieldset>
  );
}

EntradaDeseo.propTypes = {
  onNuevoDeseo: PropTypes.func.isRequired,
};
