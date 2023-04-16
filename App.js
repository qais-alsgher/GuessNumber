import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/Colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    cairo: require("./assets/fonts/Cairo-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const onGameOver = (rounds) => {
    setRoundsNumber(rounds);
    setGameOver(true);
  };

  const startGameHandler = () => {
    setUserNumber("");
    setGameOver(false);
    setRoundsNumber(0);
  };

  const screen = userNumber ? (
    gameOver ? (
      <GameOver
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onRestart={startGameHandler}
      />
    ) : (
      <GameScreen userChoice={userNumber} onGameOver={onGameOver} />
    )
  ) : (
    <StartGameScreen onStartGame={setUserNumber} />
  );

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.backgroundPage}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.backgroundPage}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.backgroundPage}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundPage: {
    flex: 1,
  },
  backgroundImagePage: {
    // flex: 1,
    // resizeMode: "cover",
  },
});
