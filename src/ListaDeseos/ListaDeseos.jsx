//import logger from "react-Console-Logger";
import Proptypes from "prop-types";
import "../App/App.css";
import DeseoItem from "./DeseoItem";

export default function ListaDeseos({ Deseos, onActualizarDeseos }) {
  // const l = new logger();
  return (
    <ul className="Deseo-lista">
      {Deseos.map((Deseo, i) => (
        <DeseoItem
          key="{Deseo.id}"
          Deseo={Deseo}
          onCambioHecho={(hecho) => {
            onActualizarDeseos(hecho, i);
            //aqui debemos procesar el deseo que ha cambiado

            // const deseosactuales = [...Deseos];
            // deseosactuales[i].hecho = hecho;
            {
              console.log(Deseo.id);
            }
            // onActualizarDeseos(deseosactuales);
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
