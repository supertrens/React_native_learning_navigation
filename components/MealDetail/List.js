import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}> {item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#444",
  },

  itemText: {
    color: "white",
    textAlign: "center",
  },
});

export default List;
