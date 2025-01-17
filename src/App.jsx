import React from "react";
import "./App.css";

function App() {
  const wishlist = [
    { id: 1, name: "Playstation 5", done: false },
    { id: 2, name: "Macbook Pro", done: true },
    { id: 3, name: "Tesla Model S", done: false },
  ];

  return (
    <>
      <h1>My wishlist</h1>
      <fieldset id="new wishes">
        <p>
          <input type="text" placeholder="Introduce tu deseo" />
        </p>
        <p>
          <button>add wish</button>
        </p>
        <legend>Adding new whishes</legend>
      </fieldset>
      <div id="list">
        <ul>
          {wishlist.map(({ id, name, done }) => (
            <li key={id}>
              <input type="checkbox" defaultChecked={done} id={id} />
              <label htmlFor={id}>{name}</label>
            </li>
          ))}
        </ul>
        <button>Archive done</button>
      </div>
    </>
  );
}

export default App;
