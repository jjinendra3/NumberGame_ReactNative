import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const PrimaryButton = ({ name, onPress }) => {
  if (name === "md-remove") {
    name = <Ionicons name="md-remove" />;
  }
  if (name === "add") {
    name = <Ionicons name="add" />;
  }
  return (
    <View style={styles.btnoutcontainer}>
      <Pressable
        style={styles.container}
        android_ripple={{ color: "#ddabd0" }}
        onPress={onPress}
      >
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
    alignItems: "center",
  },
  font: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
