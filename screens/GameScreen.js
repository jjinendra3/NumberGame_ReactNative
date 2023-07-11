import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
const GameScreen = ({ num, setmodaler }) => {
  return (
    <View style={styles.container}>
      <Text>This is GameScreen</Text>
      <PrimaryButton
        name="GO BACK"
        onPress={() => {
          setmodaler(false);
        }}
      />
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
