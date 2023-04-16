import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Dimensions,
} from "react-native";
import { useState, useEffect, useMemo } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let maxBoundry = 100;
let minBoundry = 1;

export default function GameScreen({ userChoice, onGameOver }) {
  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundry, maxBoundry, userChoice);
  }, [userChoice]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);
  const { width, height } = useWindowDimensions();

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setGuessRounds((curRounds) => [nextNumber, ...curRounds]);
  }

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userChoice]);

  useEffect(() => {
    maxBoundry = 100;
    minBoundry = 1;
  }, []);

  if (height < 500) {
    content = (
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => {
              nextGuessHandler("lower");
            }}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => {
              nextGuessHandler("greater");
            }}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    );
  } else {
    content = (
      <Card>
        <InstructionText>Higher or Lower ???</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler("lower");
              }}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler("greater");
              }}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    );
  }

  return (
    <ScrollView>
      <View style={styles.GameScreenContainer}>
        <Title>Oppnent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        {content}
        <View style={styles.guessRoundsContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRounds.length - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const heightScreen = Dimensions.get("window").height;

const styles = StyleSheet.create({
  GameScreenContainer: {
    flex: 1,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: heightScreen > 450 ? 20 : 5,
  },
  buttonContainer: {
    flex: 1,
  },
  guessRoundsContainer: {
    flex: 1,
    padding: 15,
    width: "100%",
  },
});
