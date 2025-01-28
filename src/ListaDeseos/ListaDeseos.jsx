//import { useState } from "react";
import Proptypes from "prop-types";
import DeseoItem from "./DeseoItem";

export default function Deseolista({ Deseos, onDeseohechoChange }) {
  return (
    <ul className="Deseo-lista">
      {Deseos.map((Deseo) => (
        <DeseoItem
          key="{Deseo.id}"
          Deseo={Deseo}
          onhechoChange={onDeseohechoChange}
        />
      ))}
    </ul>
  );
}

Deseolista.propTypes = {
  Deseos: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      texto: Proptypes.string,
      hecho: Proptypes.bool,
    })
  ),

  onDeseohechoChange: Proptypes.func.isRequired,
};

Deseolista.defaultProps = {
  Deseos: [],
};
