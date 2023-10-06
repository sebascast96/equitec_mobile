import React from 'react';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Typography from '../../components/Typography';
import moment from 'moment';
import Button from '../../components/Button';
import { Constants } from '../../common';

const VisitFormComponent = (props) => {
 const { visit, handlePressLegalizar, handlePressDetalle, handlePressForm } =
  props;
 return (
  <SafeAreaProvider>
   <View style={styles.visitformScreen}>
    <View style={styles.visitformContainer}>
     <View style={styles.center}>
      <Text style={styles.titulo}>Reporte de soporte</Text>
     </View>
    </View>
   </View>
  </SafeAreaProvider>
 );
};

export default VisitFormComponent;
