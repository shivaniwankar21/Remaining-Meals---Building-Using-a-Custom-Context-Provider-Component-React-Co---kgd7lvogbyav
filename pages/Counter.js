import { useMeals } from "./MealsProvider";

const Counter = () => {
  const { meals } = useMeals();
  const remainingMeals = meals.filter((meal) => !meal.ticked).length;

  return (
    <div>
      <h3>Meals Remaining: {remainingMeals}</h3>
    </div>
  );
};

export default Counter;
