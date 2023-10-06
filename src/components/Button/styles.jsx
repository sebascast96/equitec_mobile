import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
 container: {
  height: 45,
  textAlignVertical: 'center',
  width: 200,
  backgroundColor: '#172C5D',
 },
 button: {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  borderRadius: 5,
 },
 text: {
  color: '#FFFFFF',
  fontSize: 17,
  textAlignVertical: 'center',
 },
 buttonDisabled: {
  color: 'white',
  alignItems: 'center',
  backgroundColor: '#DDD',
  padding: 10,
 },
 countContainer: {
  alignItems: 'center',
  padding: 10,
 },
});

export default styles;
