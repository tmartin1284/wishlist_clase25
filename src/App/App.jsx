import { useState } from "react";
import "./App.css";
import EntradaDeseos from "../EntradaDeseos/EntradaDeseos.jsx";
import ListaDeseos from "../ListaDeseos/ListaDeseos.jsx";

const Deseolista = [
  { id: 1, texto: "Playstation 5", hecho: false },
  { id: 2, texto: "Macbook Pro", hecho: true },
  { id: 3, texto: "Tesla Model S", hecho: false },
];

function App() {
  const [Deseos, setDeseos] = useState(Deseolista);

  return (
    <>
      <h1>Mi lista de deseos bonita</h1>
      <EntradaDeseos
        onNuevoDeseo={(a) => {
          setDeseos((Deseos) => [...Deseos, a]);
        }}
      />
      {/* 


      setDeseos(Deseos.add (a))
      
      (Deseos) => [...Deseos,a]

      setDeseos((Deseos) => [...Deseos,a])

      (a)=>{setDeseos((Deseos) => [...Deseos,a])}
      */}
      <ListaDeseos
        Deseos={Deseos}
        onActualizarDeseos={(hecho, i) => {
          const deseosactuales = [...Deseos];
          deseosactuales[i].hecho = hecho;

          setDeseos(deseosactuales);
        }}
      />

      <div id="lista">
        <button
          className="Deseo-clear"
          onClick={() => setDeseos(Deseos.filter((Deseo) => !Deseo.hecho))}
        >
          Archive hecho
        </button>
      </div>
    </>
  );
}

export default App;
