import React from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return <MealsList data={meals} />;
};

export default MealsOverviewScreen;
