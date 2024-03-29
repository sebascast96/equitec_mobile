import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import VisitFormComponent from './VisitForm.component';
import { useNavigation } from '@react-navigation/native';

const VisitFormScreen = (props) => {
 const navigation = useNavigation();
 const { visit } = props.route.params;
 function handlePressLegalizar() {
  navigation.navigate(Constants.screens.VisitForm, { visit: visit });
 }
 function handlePressDetalle() {
  navigation.navigate(Constants.screens.VisitForm, { visit: visit });
 }
 function handlePressForm() {
  navigation.navigate(Constants.screens.VisitForm, { visit: visit });
 }
 return (
  <VisitFormComponent
   visit={visit}
   handlePressLegalizar={handlePressLegalizar}
   handlePressDetalle={handlePressDetalle}
   handlePressForm={handlePressForm}
  />
 );
};

export default VisitFormScreen;
