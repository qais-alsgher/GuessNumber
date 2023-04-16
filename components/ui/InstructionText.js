import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const InstructionText = ({ children }) => {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
    color: Colors.secondary500,
    fontFamily: "open-sans",
  },
});
