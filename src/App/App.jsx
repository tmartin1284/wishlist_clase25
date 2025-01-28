import { useState } from "react";
import "./App.css";
import EntradaDeseos from "../EntradaDeseos/EntradaDeseos.jsx";
import ListaDeseos from "../listaaDeseos/listaaDeseos.jsx";

const Deseolista = [
  { id: 1, texto: "Playstation 5", hecho: false },
  { id: 2, texto: "Macbook Pro", hecho: true },
  { id: 3, texto: "Tesla Model S", hecho: false },
];

function App() {
  const [Deseos, setDeseos] = useState(Deseolista);

  return (
    <>
      <h1>My Deseolista</h1>
      <EntradaDeseos
        onNuevoDeseo={(a) => {
          setDeseos((Deseos) => [a, ...Deseos]);
        }}
      />
      {/* 

      setDeseos(Deseos.add (a))
      
      (Deseos) => [...Deseos,a]

      setDeseos((Deseos) => [...Deseos,a])

      (a)=>{setDeseos((Deseos) => [...Deseos,a])}
      */}
      <ListaDeseos Deseos={Deseos} onDeseohechoChange={() => {}} />

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
