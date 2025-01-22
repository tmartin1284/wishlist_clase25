import Proptypes from "prop-types";

export default function WishItem({ wish, onDoneChange }) {
  return (
    <li
      key={wish.id}
      className={`wish-list_item  ${wish.done ? "wish-list__item--done" : ""}`}
    >
      <input
        type="checkbox"
        defaultChecked={wish.done}
        id={wish.id}
        onChange={(e) => onDoneChange(!e.target.value)}
      />
      <label htmlFor={wish.id}>{wish.text}</label>
    </li>
  );
}

WishItem.propTypes = {
  wish: Proptypes.shape({
    id: Proptypes.string,
    text: Proptypes.string,
    done: Proptypes.bool,
  }).isRequired,

  onDoneChange: Proptypes.func.isRequired,
};
