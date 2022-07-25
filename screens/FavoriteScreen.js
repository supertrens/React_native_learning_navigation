import { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy";

const FavoriteScreen = ({ navigation }) => {
  const { ids } = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
        <Button title="Add a meal" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  return <MealsList data={favoriteMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontweight: "bold",
  },
});
export default FavoriteScreen;
