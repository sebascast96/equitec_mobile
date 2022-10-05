import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  assignedvisitsScreen: {
    width: "85%",
    height: "90%",
    marginTop: 35,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flex: 1,
  },
  assignedvisitsContainer: {
    width: "100%",
    display: "flex",
    flex: 1,
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputUserStyle: {
    height: 30,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#172C5D",
    padding: 10,
    marginBottom: 30,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 30,
    fontSize: 27,
    color: "#E37427",
  },
  // Seccion Filtros
  left: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  iconrefresh: {
    fontSize: 20,
    marginLeft: 8,
    marginTop: 1,
  },
  // Barra de busqueda
  textbusqueda: {
    marginTop: 20,
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 2,
  },
  busquedaContaienr: {
    flexDirection: "row",
    borderColor: "#000",
    paddingBottom: 10,
  },
  icon: {
    marginLeft: 5,
    marginTop: 1,
  },
  inputStyle: {
    height: 38,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#fff",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 30,
    flex: 1,
  },
  // Card
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    flex: 1,
  },
  fechacard: {
    marginTop: 20,
    fontSize: 17,
    marginLeft: 12,
    marginBottom: 8,
  },
  titulocard: {
    fontWeight: "bold",
    marginTop: 8,
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 3,
    color: "#E37427",
  },
  textcard: {
    fontSize: 12,
    marginLeft: 5,
    marginBottom: 8,
  },
  textfecha: {
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 5,
    marginBottom: 3,
    color: "#172C5D",
  },
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  //  MODAL
});

export default styles;
