import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: 45,
    textAlignVertical: "center",
  },
  button: {
    width: 200,
    alignItems: "center",
    backgroundColor: "#172C5D",
    flex: 1,
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 17,
    textAlignVertical: "center",
  },
  buttonDisabled: {
    color: "white",
    alignItems: "center",
    backgroundColor: "#DDD",
    padding: 10,
    borderRadius: 5,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default styles;
