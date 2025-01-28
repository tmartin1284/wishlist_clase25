import Proptypes from "prop-types";
import { useState } from "react";

export default function DeseoItem({ Deseo, onhechoChange }) {
  const [hecho, sethecho] = useState(Deseo.hecho);
  return (
    <li
      key={Deseo.id}
      className={`Deseo-lista_item  ${
        Deseo.hecho ? "Deseo-lista__item--hecho" : ""
      }`}
    >
      <input
        type="checkbox"
        defaultChecked={Deseo.hecho}
        id={Deseo.id}
        onChange={(e) => {
          Deseo.hecho = e.target.checked;
          sethecho(Deseo.hecho);

          // onhechoChange(Deseo.hecho);
        }}
      />
      <label htmlFor={Deseo.id}>{Deseo.texto}</label>
    </li>
  );
}

DeseoItem.propTypes = {
  Deseo: Proptypes.shape({
    id: Proptypes.number,
    texto: Proptypes.string,
    hecho: Proptypes.bool,
  }).isRequired,

  onhechoChange: Proptypes.func.isRequired,
};
