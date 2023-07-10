import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#DA0641", "#FAD961"]}>
      <ImageBackground
        source={require("./background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ opacity: 0.2 }}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
