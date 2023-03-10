import Modal from "../UI/Modal";
import style from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: "12.99" }].map((index) => (
        <li> {index.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onHideCart}>Close</button>
        <button className={style["button"]}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
