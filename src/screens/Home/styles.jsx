import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 homeScreen: {
  width: '85%',
  height: '90%',
  marginTop: 35,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  backgroundColor: '#ffffff',
  flex: 1,
 },
 homeContainer: {
  width: '100%',
  display: 'flex',
  flex: 1,
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
 },

 tinyLogo: {
  width: 45,
  height: 45,
  marginRight: 20,
 },

 bigLogo: {
  width: 100,
  height: 100,
  alignSelf: 'center',
  marginVertical: 30,
 },
});

export default styles;
