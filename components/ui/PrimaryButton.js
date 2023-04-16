import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.Pressable]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#631039" }}
        onPress={onPress}
      >
        <Text style={styles.buttonTxt}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 8,
    overflow: "hidden",
    borderRadius: 28,
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    textAlign: "center",
  },
  buttonTxt: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  Pressable: {
    opacity: 0.75,
  },
});
