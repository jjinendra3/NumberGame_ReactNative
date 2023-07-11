import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Title from "./components/Title";
import GameOver from "./screens/GameOver"
export default function App() {
  const [first, setfirst] = useState(false);
  const [num, setnum] = useState();
  const [gameover, setgameover] = useState(false)
  let screen = <StartGame setmodaler={setfirst} setnum={setnum} />;
  if (first) {
    screen = <GameScreen setmodaler={()=>setfirst(false)} num={num} setgameover={()=>{setgameover(true);
    setfirst(false);}} />;
  }
  if(gameover){
    screen=<GameOver setgameover={()=>{
      setgameover(false);
      setfirst(false);
    }} num={num}/>
  }
  
  return (
    <LinearGradient style={styles.container} colors={["#DA0641", "#FAD961"]}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("./background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={{ opacity: 0.2 }}
        >
          {/* {title} */}
          {screen}
        </ImageBackground>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
