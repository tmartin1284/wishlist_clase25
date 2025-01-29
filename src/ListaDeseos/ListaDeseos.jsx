//import { useState } from "react";
import Proptypes from "prop-types";
import DeseoItem from "./DeseoItem";

export default function ListaDeseos({ Deseos, onActualizarDeseos }) {
  return (
    <ul className="Deseo-lista">
      {Deseos.map((Deseo, i) => (
        <DeseoItem
          key="{Deseo.id}"
          Deseo={Deseo}
          onCambioHecho={(hecho) => {
            //aqui debemos procesar el deseo que ha cambiado

            const deseosactuales = [...Deseos];
            deseosactuales[i].hecho = hecho;

            onActualizarDeseos(deseosactuales);
          }}
        />
      ))}
    </ul>
  );
}

ListaDeseos.propTypes = {
  Deseos: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      texto: Proptypes.string,
      hecho: Proptypes.bool,
    })
  ).isRequired,

  onActualizarDeseos: Proptypes.func.isRequired,
};

ListaDeseos.defaultProps = {
  Deseos: [],
};
