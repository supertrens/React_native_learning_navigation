import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { MEALS } from "../data/dummy";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    console.log(meal);
    navigation.setOptions({ title: meal.title });
  }, [navigation]);

  return (
    <View>
      <Text> {meal?.ingredients}</Text>
    </View>
  );
};

export default MealDetailScreen;
