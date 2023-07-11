import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Title = ({ name }) => {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 36,
    marginBottom: 20,
    borderWidth: 2,
    padding: 15,
    borderColor: "white",
  },
});
