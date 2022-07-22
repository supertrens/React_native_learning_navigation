import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const onNavigateToMealDetail = (mealId) => {
    navigation.navigate("MealDetailScreen", {
      mealId,
    });
  };

  const renderMealItem = ({ item }) => (
    <MealItem item={item} onPress={onNavigateToMealDetail} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
});

export default MealsOverviewScreen;
