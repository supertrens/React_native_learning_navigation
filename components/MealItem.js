import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

const MealItem = ({ item, onPress }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() => onPress(item)}
        android_ripple="#ccc"
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View style={styles.buttonContainer}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: { borderRadius: 8, overflow: "hidden" },

  buttonPressed: {
    opacity: 0.5,
  },

  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
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

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
});

export default MealItem;
