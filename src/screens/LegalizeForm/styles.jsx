import { StyleSheet } from "react-native";
import { Theme } from "../../common";

const styles = StyleSheet.create({
  legalizeformScreen: {
    width: "85%",
    height: "90%",
    marginTop: 35,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flex: 1,
  },
  legalizeformContainer: {
    width: "100%",
    display: "flex",
    flex: 1,
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  titulo: {
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 30,
    fontSize: 27,
    color: "#E37427",
  },
  bottomButtons2: {
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    width: "48%",
    backgroundColor: "#D8D8D8",
    borderWidth: 2,
    borderColor: Theme.colors.mainOrange,
  },
  bottomButton: {
    width: "48%",
    backgroundColor: Theme.colors.mainOrange,
  },
  inputStyle: {
    height: 45,
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 15,
  },

  inputStyleTable: {
    height: 45,
    borderWidth: 0,
    backgroundColor: "white",
    padding: 10,
  },

  inputStyleUpload: {
    height: 45,
    width: "75%",
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: "white",
    padding: 10,
  },
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    zIndex: -1,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFF1C1",
    justifyContent: "space-evenly",
  },
  head: { height: 40, backgroundColor: Theme.colors.mainOrange, textAlign:'center' },
  textTable:{
    color:'white',
    alignSelf:'center'
  }
});

export default styles;
