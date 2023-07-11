import { View, Text,StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
const GameOver = ({setgameover,num}) => {
  return (
    <View style={{flex:1,marginTop:100, alignItems:'center'}}>
      <Title name="GameOver"/>
      <View style={styles.guesscontainer}>
      <Text style={styles.guess}>{num}</Text>
      </View>
      <PrimaryButton name="Go Back" onPress={setgameover}></PrimaryButton>
    </View>
  );
};

export default GameOver;
const styles=StyleSheet.create({
  guesscontainer:{
  padding:24,
  marginVertical:10,
  alignItems:"center",
  justifyContent:'center'
},
guess:{
  color:'yellow',
  fontWeight:'bold',
  fontSize:52
}});