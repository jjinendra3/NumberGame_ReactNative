import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    padding: 16,
    marginTop: 36,
    backgroundColor: "#72063c",
    borderRadius: 6,
    elevation: 4,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
});
