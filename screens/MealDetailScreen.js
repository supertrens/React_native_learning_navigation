import React from "react";
import { View, Text } from "react-native";

const MealDetailScreen = ({ route }) => {
  const { title, data } = route.params;
  console.log("HERE", data);
  return (
    <View>
      <Text> {data?.ingredients}</Text>
    </View>
  );
};

export default MealDetailScreen;
