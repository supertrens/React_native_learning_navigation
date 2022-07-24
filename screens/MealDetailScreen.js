import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy";

const MealDetailScreen = ({ route, navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { mealId } = route.params;
  const {
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
  } = MEALS.find((meal) => meal.id === mealId);

  const onAddFavoriteHandler = () => {
    setIsFavorite((prevState) => !prevState);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <IconButton
          onPress={onAddFavoriteHandler}
          icon={isFavorite ? "ios-star" : "ios-star-outline"}
          color="white"
        />
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}> {title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
});

export default MealDetailScreen;
