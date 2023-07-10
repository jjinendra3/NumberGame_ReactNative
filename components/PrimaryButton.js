import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ name }) => {
  return (
    <View style={styles.btnoutcontainer}>
      <Pressable style={styles.container} android_ripple={{ color: "#ddabd0" }}>
        <Text style={styles.font}>{name}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  btnoutcontainer: {
    borderRadius: 28,
    marginTop: 10,
    marginHorizontal: 15,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#9d577d",
    elevation: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  font: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
