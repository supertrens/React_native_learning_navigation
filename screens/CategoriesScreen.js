import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy";

function renderItem({ item }) {
  return (
    <CategoryGridTile title={item.title} color={item.color} id={item.id} />
  );
}

const CategoryScreen = () => {
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
