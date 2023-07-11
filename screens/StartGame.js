import { View, TextInput, Alert, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
const StartGame = (props) => {
  const [input, setinput] = useState("");
  const userinput = () => {
    const num = parseInt(input);
    if (isNaN(num) || num < 0) {
      Alert.alert("Not Valid", "Number Should be between 1 to 99", [
        { text: "Okay", style: "cancel", onPress: resetter },
      ]);
      return;
    } else {
      props.setmodaler(true);
      props.setnum(num);
      resetter();
    }
  };
  const resetter = () => {
    setinput("");
  };
  return (
    <View style={styles.root}>
      <Title name="Number Guesser" />
      <Card>
        <Text
          style={{
            fontSize: 24,
            color: "yellow",
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Enter a Number:
        </Text>
        <TextInput
          keyboardType="numeric"
          maxLength={2}
          style={styles.numberInput}
          autoCapitalize="none" //for mail input
          autoCorrect={false} //for mail/password input
          value={input}
          onChangeText={setinput}
        />
        <View style={styles.btncontainer}>
          <PrimaryButton name="Reset" onPress={resetter} />
          <PrimaryButton name="Confirm" onPress={userinput} />
        </View>
      </Card>
    </View>
  );
};
export default StartGame;
const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    marginVertical: 4,
    width: 40,
    textAlign: "center",
  },
  btncontainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
  },
  root: {
    flex: 1,
    alignItems: "center",
    // marginTop:100,
    justifyContent: "center",
  },
});
