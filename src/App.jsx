//import React from "react";
import "./App.css";

const wishlist = [
  { id: 1, name: "Playstation 5", done: false },
  { id: 2, name: "Macbook Pro", done: true },
  { id: 3, name: "Tesla Model S", done: false },
];

function App() {
  return (
    <>
      <h1>My wishlist</h1>
      <fieldset id="new wishes" className="wish-input">
        <p>
          <input
            type="text"
            className="wish-input__field"
            placeholder="Introduce tu deseo"
          />
        </p>
        <p>
          <button className="wish-clear">add wish</button>
        </p>
        <legend className="wish-input__label">Adding new whishes</legend>
      </fieldset>
      <div id="list">
        <ul className="wish-list">
          {wishlist.map(({ id, name, done }) => (
            <li
              key={id}
              className={`wish-list_item  ${
                done ? "wish-list__item--done" : ""
              }`}
            >
              <input type="checkbox" defaultChecked={done} id={id} />
              <label htmlFor={id}>{name}</label>
            </li>
          ))}
        </ul>
        <button className="wish-clear">Archive done</button>
      </div>
    </>
  );
}

export default App;
