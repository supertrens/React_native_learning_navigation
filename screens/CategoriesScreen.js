import React, { useCallback } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy";

const CategoryScreen = ({ navigation }) => {
  const onCategoryClickHandler = useCallback((categoryId, title) => {
    navigation.navigate("MealsOverviewScreen", { categoryId, title });
  }, []);

  const renderItem = ({ item }) => (
    <CategoryGridTile
      title={item.title}
      color={item.color}
      id={item.id}
      onPress={onCategoryClickHandler}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
  },
});

export default CategoryScreen;
