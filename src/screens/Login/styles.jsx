import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginScreen: {
    width: '85%',
    height: '90%',
    marginTop: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flex: 1,
  },
  loginContainer: {
    width: '100%',
    display: 'flex',
    flex: 1,
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 17,
    marginBottom: 5,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  center: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  headertittle:{
    fontWeight: 'bold',
    marginTop: 18,
    fontSize: 27,
    color: '#E37427',
  },
  headersubtittle:{
    marginTop: 2,
    fontSize: 17,
    marginBottom: 35,
  },
  // SECTION INPUT USER
  inputUserStyle: {
    height: 45,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#172C5D',
    padding: 10,
    marginBottom: 30,
  },
  // SECTION INPUT PASSWORD
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#000',
    paddingBottom: 10,
  },
  icon: {
    padding: 5,
  },
  inputStyle: {
    height: 45,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#172C5D',
    padding: 10,
    marginBottom: 30,
    flex: 1,
  },

});

export default styles;
