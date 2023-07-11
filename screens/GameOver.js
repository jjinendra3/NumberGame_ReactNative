import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameOver = ({ setgameover, num, guess }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title name="GameOver" />
      <View style={styles.guesscontainer}>
        <View style={styles.imageContainer}>
          <Image source={require("../success.png")} style={styles.image} />
        </View>

        <Text style={styles.guess}>
          Your phone took{" "}
          <Text style={{ fontWeight: "bold", color: "green" }}>{guess}</Text> to
          guess{" "}
          <Text style={{ fontWeight: "bold", color: "green" }}>{num}</Text>.
        </Text>
      </View>
      <PrimaryButton
        name="Start New Game"
        onPress={setgameover}
      ></PrimaryButton>
    </View>
  );
};

export default GameOver;
const styles = StyleSheet.create({
  guesscontainer: {
    padding: 24,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  guess: {
    color: "black",
    fontSize: 24,
  },
  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "blue",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
