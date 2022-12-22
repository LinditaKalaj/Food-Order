import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderCartButton(props) {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>1</span>
    </button>
  );
}
export default HeaderCartButton;
