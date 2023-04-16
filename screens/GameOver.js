import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOver({ roundsNumber, userNumber, onRestart }) {
  const { height } = useWindowDimensions();
  const imageSize = {
    width: height < 450 ? 100 : 300,
    height: height < 450 ? 100 : 300,
    borderRadius: height < 450 ? 50 : 150,
    borderWidth: 3,
    borderColor: Colors.primary900,
  };
  return (
    <View style={styles.GameOverContainer}>
      <Title>GameOver</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={[styles.image, imageSize]}
        />
      </View>
      <Text style={styles.textContainer}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>NEW GAME</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  GameOverContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  highlight: {
    color: Colors.primary900,
    fontFamily: "open-sans-bold",
  },
});
