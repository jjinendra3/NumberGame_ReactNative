import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
let minB = 1;
let maxB = 100;
//
const GameScreen = ({ num, setmodaler, setgameover }) => {
  const [guesslogs, setguesslogs] = useState([]);
  const randomGen = (min, max, num) => {
    const random = Math.floor(Math.random() * (max - min)) + min;
    if (random !== num) {
      return random;
    } else {
      minB = 1;
      maxB = 100;
      setgameover(guesslogs.length + 1);
      return;
    }
  };
  const initguess = randomGen(minB, maxB, num);
  const [guess, setguess] = useState(initguess);
  const higher = () => {
    if (num < guess) {
      Alert.alert("Lie!", "Liar Liar! Pants on Fire 🤥🤥👖🔥");
      return;
    }
    minB = guess + 1;
    setguess(randomGen(minB, maxB, num));
    let arr = [guess, ...guesslogs];
    // arr.push(guess)
    setguesslogs(arr);
  };
  const lower = () => {
    if (num > guess) {
      Alert.alert("Lie!", "Liar Liar! Pants on Fire 🤥🤥👖🔥");
      return;
    }
    maxB = guess;
    setguess(randomGen(minB, maxB, num));
    let arr = [guess, ...guesslogs];
    // arr.push(guess)
    setguesslogs(arr);
  };
  return (
    <View style={styles.container}>
      <Title name="Guesser"></Title>
      <View style={styles.guesscontainer}>
        <Text style={styles.guess}>{guess}</Text>
      </View>
      <Card>
        <Text
          style={{
            fontSize: 24,
            color: "red",
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Higher or Lower?
        </Text>
        <View style={{ flexDirection: "row-reverse" }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton name="md-remove" onPress={lower}></PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton name="add" onPress={higher} />
          </View>
        </View>
        <PrimaryButton
          name="Restart Game"
          onPress={() => {
            minB = 1;
            maxB = 100;
            setmodaler();
          }}
        />
      </Card>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Guesses
      </Text>
      <View style={styles.logs}>
        <FlatList
          data={guesslogs}
          renderItem={(element) => {
            return (
              <View key={element.index} style={styles.con}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Guess #{guesslogs.length - element.index} : {element.item}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "yellow",
    fontSize: 28,
    marginBottom: 20,
    borderWidth: 2,
    padding: 15,
    borderColor: "red",
  },
  guesscontainer: {
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
  },
  guess: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 52,
  },
  logs: {
    flex: 1,
    width: "100%",
    paddingBottom: 50,
  },
  con: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "yellow",
    borderRadius: 6,
    elevation: 4,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
});
