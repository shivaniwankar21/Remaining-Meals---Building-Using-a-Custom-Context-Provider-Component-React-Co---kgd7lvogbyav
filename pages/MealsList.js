import { useMeals } from "./MealsProvider";

const MealsList = () => {
  const { meals, tickMeal } = useMeals();

  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <input
              type="checkbox"
              checked={meal.ticked || false}
              onChange={() => tickMeal(meal.id)}
            />
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
