import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../common";

export const styles = StyleSheet.create({
  modalContainerSmall: {
    backgroundColor: "white",
    borderRadius: 18,
    marginTop: "100%",
    marginBottom: "75%",
    width: "90%",
  },
  modal: {
    shadowColor: "rgba(81, 30, 210, 0.1)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 24,

    elevation: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 24,
    marginHorizontal: 8,
  },
  modalContentContainer: {
    margin: 24,
  },
  typeText: {
    // marginBottom: 15,
  },
  iconPosition: {
    alignItems: "center",
    height: 100,
  },
  textContain: {
    marginTop: 16,
  },
  messageTypeStyle: {
    fontWeight: "bold",
    fontSize: 21,
  },
  paragraphContainer: {
    alignItems: "center",
    marginTop: 20,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paragraphColor: {
    color: "#788190",
    textAlign: "center",
  },
  buttonPrimary: {
    alignItems: "center",
  },
  modalContainerCon: {
    backgroundColor: "white",
    borderRadius: 18,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 156,
    marginBottom: 202,
  },
  modalContainerConSmall: {
    backgroundColor: "white",
    borderRadius: 18,
    marginLeft: 35,
    marginRight: 35,
    marginTop: "25%",
    marginBottom: "20%",
  },
  logo: {
    height: 66,
    width: 70,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    color: "purple",

    lineHeight: 26,
  },
  titleSmall: {
    fontSize: 24,
    textAlign: "left",
    color: "purple",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "black",
    fontWeight: "400",
    lineHeight: 20,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "black",
    fontWeight: "400",
    lineHeight: 20,
  },
  titleContainerSmall: {
    marginTop: 10,
    marginHorizontal: 24,
  },
  titleContainer: {
    height: 400,
    maxHeight: "100%",
  },
  buttonCustomStyleSmall: {
    fontSize: 10,
  },
  spinner: {
    marginBottom: "50%",
  },
  subtitleContainer: {
    marginTop: 16,
  },
  primaryButtonContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  blurView: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  blurBackground: {
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    flex: 1,
  },
});

export default styles;
