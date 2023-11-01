import React from 'react';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import Typography from '../../components/Typography';
import moment from 'moment';
import Button from '../../components/Button';
import { Constants } from '../../common';

const VisitInfoComponent = (props) => {
 const { visit, handlePressLegalizar, handlePressDetalle, handlePressForm } =
  props;
 return (
  <SafeAreaProvider>
   <View style={styles.visitinfoScreen}>
    <View style={styles.visitinfoContainer}>
     <View style={styles.center}>
      <Text style={styles.titulo}>Reporte de soporte</Text>
     </View>
     <View style={styles.infoContainer}>
      <View style={styles.paragraphSize}>
       <Typography
        type={'h4'}
        style={styles.infoText}
        text={visit.visit.description}
       />
       <Typography
        type={'h4'}
        style={styles.infoText}
        text={'Equipo: ' + visit.visit.detail}
       />
       <Typography
        type={'h4'}
        style={styles.infoText}
        text={'Tipo de orden: ' + visit.visit.description}
       />
       <Typography
        type={'h4'}
        style={styles.infoText}
        text={
         'Inicio: ' +
         moment(visit.visit.start, moment.ISO_8601).format('YYYY-MM-DD hh:mm')
        }
       />
       <Typography
        type={'h4'}
        style={styles.infoText}
        text={
         'Final: ' +
         moment(visit.visit.end, moment.ISO_8601).format('YYYY-MM-DD hh:mm')
        }
       />

       <Typography
        type={'h4'}
        style={styles.infoText}
        text={
         'Tecnico: ' +
         visit.visit.technicians[0].technician.username +
         ' ' +
         visit.visit.technicians[0].technician.first_surname +
         ' ' +
         visit.visit.technicians[0].technician.second_surname
        }
       />
      </View>
      <View style={styles.bottomButtons}>
       <Button
        customStyle={styles.bottomButton}
        handlePress={handlePressLegalizar}
        buttonText={Constants.language.screensText.assignedVisits.legalize}
       />
       <View style={styles.bottomButtons2}>
        <Button
         customStyle={styles.bottomButton}
         handlePress={handlePressDetalle}
         disabled={true}
         buttonText='Ver detalle'
        />
        <Button
         customStyle={styles.bottomButton}
         handlePress={handlePressForm}
         disabled={true}
         buttonText='Llenar formulario'
        />
       </View>
      </View>
     </View>
    </View>
   </View>
  </SafeAreaProvider>
 );
};

export default VisitInfoComponent;
