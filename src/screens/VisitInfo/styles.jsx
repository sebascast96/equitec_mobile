import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 visitinfoScreen: {
  width: '85%',
  height: '90%',
  marginTop: 35,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flex: 1,
 },
 visitinfoContainer: {
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
 infoContainer: {
  display: 'flex',
  height: '80%',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
 },
 paragraphSize: {},
 bottomButtons: { width: '100%' },
 bottomButtons2: {
  marginTop: 40,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
 },
 bottomButton: {
  width: 170,
 },
 infoText: {
  marginTop: 5,
 },
});

export default styles;
