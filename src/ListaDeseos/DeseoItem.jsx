import Proptypes from "prop-types";
//import { useState } from "react";

export default function DeseoItem({ Deseo, onCambioHecho }) {
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
          onCambioHecho(e.target.checked);
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

  onCambioHecho: Proptypes.func.isRequired,
};
