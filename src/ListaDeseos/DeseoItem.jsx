import Proptypes from "prop-types";
import "../App/App.css";
import { useState, useEffect } from "react";

export default function DeseoItem({ Deseo, onCambioHecho }) {
  const [edad, setEdad] = useState(0);

  useEffect(() => {
    if (Deseo.hecho) setEdad(0);
    else {
      const interval = setInterval(
        () => setEdad((segundos) => segundos + 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [Deseo.hecho]);

  //aadfasdf

  return (
    <li
      key={Deseo.id}
      className={`Deseo-lista_item  
        ${Deseo.hecho ? "Deseo-lista__item--hecho" : ""}
        ${edad > 10 && edad < 20 ? "Deseo-lista__item--viejo" : ""}
        ${edad >= 20 ? "Deseo-lista__item--hazloyacoño" : ""}
      `}
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
