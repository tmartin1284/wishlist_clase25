import { useState } from "react";
import "./App.css";
import WishInput from "../WishInput/WishInput.jsx";
import WishList from "../WishList/WishList.jsx";

const wishlist = [
  { id: 1, text: "Playstation 5", done: false },
  { id: 2, text: "Macbook Pro", done: true },
  { id: 3, text: "Tesla Model S", done: false },
];

function App() {
  const [wishes, setWishes] = useState(wishlist);

  return (
    <>
      <h1>My wishlist</h1>
      <WishInput
        onNewWish={(a) => {
          setWishes((wishes) => [a, ...wishes]);
        }}
      />
      {/* 

      setWishes(wishes.add (a))
      
      (wishes) => [...wishes,a]

      setWishes((wishes) => [...wishes,a])

      (a)=>{setWishes((wishes) => [...wishes,a])}
      */}
      <WishList wishes={wishes} onWishDoneChange={() => {}} />

      <div id="list">
        <button className="wish-clear">Archive done</button>
      </div>
    </>
  );
}

export default App;
