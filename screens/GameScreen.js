import { View, Text, StyleSheet,Alert,useEffect } from "react-native";
import React,{useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
let minB=1;
let maxB=100;
const GameScreen = ({ num, setmodaler,setgameover }) => {
  const randomGen=(min,max,num)=>{
    const random=Math.floor(Math.random()*(max-min))+min;
    if(random!==num){
      return random;
    }else{
      minB=1;
      maxB=100;
      setgameover();
    }
  }
  const initguess=randomGen(minB,maxB,num);
  const [guess, setguess] = useState(initguess);
  const higher=()=>{
    if(num<guess){
      Alert.alert('Lie!','Liar Liar! Pants on Fire 🤥🤥👖🔥');
      return;
    }
    minB=guess+1;
    setguess(randomGen(minB,maxB,num));
  }
  const lower=()=>{
    if(num>guess){
       Alert.alert('Lie!','Liar Liar! Pants on Fire 🤥🤥👖🔥');
      return;
    }
    maxB=guess;
    setguess(randomGen(minB,maxB,num));
  }
  return (
    <View style={styles.container}>
     <Title name="GameScreen"></Title>
      <View style={styles.guesscontainer}>
        <Text style={styles.guess}>{guess}</Text></View>
      <PrimaryButton name="+" onPress={higher}/><PrimaryButton name="-" onPress={lower}/>
      <PrimaryButton
        name="Restart Game"
        onPress={() => {
          minB=1;
          maxB=100;
          setmodaler();
        }}
      />
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    color:'yellow',
    fontSize:28,
    marginBottom:20,
    borderWidth:2,
    padding:15,
    borderColor:'red'
  },
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
  }
});
