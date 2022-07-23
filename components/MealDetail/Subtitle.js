import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "#333",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
