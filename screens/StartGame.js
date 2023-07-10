import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  Alert,
  StyleSheet,
} from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGame = () => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        maxLength={2}
        style={styles.numberInput}
        autoCapitalize="none" //for mail input
        autoCorrect={false} //for mail/password input
      />
      <View style={styles.btncontainer}>
        <PrimaryButton name="Reset" />
        <PrimaryButton name="Confirm" />
      </View>
    </View>
  );
};
export default StartGame;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    padding: 16,
    marginTop: 100,
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
});
