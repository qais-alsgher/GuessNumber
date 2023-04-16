import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.TitleContainer}>
      <Text style={styles.TitleTxt}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  TitleContainer: {
    margin: 10,
    marginTop: 40,
  },
  TitleTxt: {
    padding: 15,
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 26,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
  },
});
