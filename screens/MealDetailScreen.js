import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy";

const MealDetailScreen = ({ route, navigation }) => {
  const {
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
  } = MEALS.find((meal) => meal.id === route.params.mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation]);

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}> {title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
      <Text style={styles.title}>Ingredients</Text>
      <View>
        {ingredients.map((ingredient) => (
          <Text key={ingredient}> {ingredient}</Text>
        ))}
      </View>

      <Text style={styles.title}>Steps</Text>
      {steps.map((step) => (
        <Text key={step}> {step}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});

export default MealDetailScreen;
