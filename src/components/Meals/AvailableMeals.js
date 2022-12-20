import DUMMY_MEALS from "../../assets/DUMMY_MEALS";
import style from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((index) => (
            <MealItem
              key={index.id}
              name={index.name}
              price={index.price}
              description={index.description}
            ></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
