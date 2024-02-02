import { StyleSheet } from "react-native";
import { Theme } from "../../common";

const styles = StyleSheet.create({
    operationallegalizationsScreen: {
        width: '85%',
        height: '90%',
        marginTop: 35,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flex: 1,
      },
      operationallegalizationsContainer: {
        width: '100%',
        display: 'flex',
        flex: 1,
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
 titulo: {
  fontWeight: 'bold',
  marginTop: 18,
  marginBottom: 30,
  fontSize: 27,
  color: '#E37427',
 },
 bottomButton: {
   width: "100%",
   backgroundColor: Theme.colors.mainOrange,
   marginBottom: 20
 },
});

export default styles;
