import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={Styles.GuessLogItemContainer}>
      <Text style={Styles.GuessLogItem}>#{roundNumber}</Text>
      <Text style={Styles.GuessLogItem}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const Styles = StyleSheet.create({
  GuessLogItemContainer: {
    flexDirection: "row",
    padding: 8,
    marginVertical: 8,
    justifyContent: "space-between",
    borderColor: Colors.primary900,
    borderWidth: 1,
    borderRadius: 30,
    width: "100%",
    backgroundColor: Colors.secondary500,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  GuessLogItem: {
    color: Colors.primary900,
    fontFamily: "open-sans-bold",
    fontSize: 16,
    padding: 8,
  },
});
