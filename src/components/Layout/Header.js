import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg"
import style from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

function Header(porps) {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="Food displayed on a table"/>
      </div>
    </Fragment>
  );
}

export default Header;
