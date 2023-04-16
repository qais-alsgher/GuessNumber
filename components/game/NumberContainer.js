import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={Styles.NumberContainer}>
      <Text style={Styles.NumberTxt}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const Styles = StyleSheet.create({
  NumberContainer: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: 28,
    margin: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  NumberTxt: {
    fontSize: 36,
    fontFamily: "open-sans-bold",
    color: Colors.secondary,
  },
});
