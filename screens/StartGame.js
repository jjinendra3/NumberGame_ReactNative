import { View, TextInput, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
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
      <Title name="Number Guesser"/>
    <View style={styles.container}>
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
    </View>
</View>
  );
};
export default StartGame;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    padding: 16,
    marginTop: 36,
    backgroundColor: "#72063c",
    borderRadius: 6,
    elevation: 4,
    // shadowcolor, shadowradius,shadowoffset,shadowopacity for ios elevation
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    marginVertical: 8,
    width: 40,
    textAlign: "center",
  },
  btncontainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
  },
  root:{
    flex:1,
    alignItems:"center",
    marginTop:100,

  }
});
