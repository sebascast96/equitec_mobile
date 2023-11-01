import { StyleSheet } from "react-native";
import { Theme } from "../../common";

const styles = StyleSheet.create({
    legalizationsScreen: {
        width: '95%',
        height: '90%',
        marginTop: 35,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flex: 1,
      },
      legalizationsContainer: {
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
 row: {
  flexDirection: "row",
  backgroundColor: "#FFF1C1",
  justifyContent: "space-evenly",
},
head: { height: 40, backgroundColor: Theme.colors.mainOrange, textAlign:'center' },
textTable:{
  color:'white',
  alignSelf:'center'
},
text:{
  color:'black',
  alignSelf:'center'
}
});

export default styles;
