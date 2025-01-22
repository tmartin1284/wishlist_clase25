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
        onChange={() => onDoneChange(!wish.done)}
      />
      <label htmlFor={wish.id}>{wish.text}</label>
    </li>
  );
}

WishItem.propTypes = {
  wish: Proptypes.shape({
    id: Proptypes.number,
    text: Proptypes.string,
    done: Proptypes.bool,
  }).isRequired,

  onDoneChange: Proptypes.func.isRequired,
};
