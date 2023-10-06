import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import VisitInfoComponent from './VisitInfo.component';
import { Constants } from '../../common';

const VisitInfoScreen = (props) => {
 const navigation = useNavigation();
 const { visit } = props.route.params;
 function handlePressLegalizar() {
  navigation.navigate(Constants.screens.LegalizeForm, { visit: visit });
 }
 function handlePressDetalle() {
  navigation.navigate(Constants.screens.VisitDetails, { visit: visit });
 }
 function handlePressForm() {
  navigation.navigate(Constants.screens.VisitForm, { visit: visit });
 }
 return (
  <VisitInfoComponent
   visit={visit}
   handlePressLegalizar={handlePressLegalizar}
   handlePressDetalle={handlePressDetalle}
   handlePressForm={handlePressForm}
  />
 );
};

export default VisitInfoScreen;
