import React, { useState } from "react";
import "./App.css";
import WishInput from "../WishInput/WishInput.jsx";

const wishlist = [
  { id: 1, name: "Playstation 5", done: false },
  { id: 2, name: "Macbook Pro", done: true },
  { id: 3, name: "Tesla Model S", done: false },
];

function App() {
  const [wishes, setWishes] = useState(wishlist);

  return (
    <>
      <h1>My wishlist</h1>
      <WishInput setWishes={setWishes} />

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
