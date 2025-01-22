//import { useState } from "react";
import Proptypes from "prop-types";
import WishItem from "./WishItem";

export default function WishList({ wishes, onWishDoneChange }) {
  return (
    <ul className="wish-list">
      {wishes.map((wish) => (
        <WishItem key={wish.id} wish={wish} onDoneChange={onWishDoneChange} />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      done: Proptypes.bool,
      text: Proptypes.string,
    })
  ),

  onWishDoneChange: Proptypes.func.isRequired,
};

WishList.defaultProps = {
  wishes: [],
};
