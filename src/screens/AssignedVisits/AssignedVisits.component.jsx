import React from 'react';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import AlertComponent from '../../components/Alerts';

LocaleConfig.locales['fr'] = {
 monthNames: [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
 ],
 monthNamesShort: [
  'Ene.',
  'Feb.',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul.',
  'Ago',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dic.',
 ],
 dayNames: [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
 ],
 dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
 today: 'Este día',
};
LocaleConfig.defaultLocale = 'fr';

const AssignedVisitsComponent = (props) => {
 const { lista, onPressVisit } = props;

 const renderItem = (item) => {
  return (
   <Pressable
    style={{
     backgroundColor: 'white',
     margin: 5,
     flex: 1,
     justifyContent: 'center',
     borderRadius: 10,
     padding: 15,
     marginTop: 15,
    }}
    onPress={() => onPressVisit(item)}>
    <View>
     <Text style={{ color: '#E37427', fontSize: 17 }}>{item.Concepto}</Text>
     <Text>Cliente: {item.Cliente}</Text>
     <Text style={{ color: '#3F60A0' }}>{item.fecha}</Text>
    </View>
   </Pressable>
  );
 };

 return (
  <SafeAreaProvider>
   <View style={styles.assignedvisitsScreen}>
    <View style={styles.assignedvisitsContainer}>
     <View style={styles.center}>
      <Text style={styles.titulo}>Visitas asignadas</Text>
     </View>
     <View style={styles.container}>
      <Agenda
       items={lista}
       refreshControl={null}
       showClosingKnob={true}
       theme={{
        agendaKnobColor: '#E37427',
       }}
       refreshing={false}
       renderItem={renderItem}
       initialNumToRender={2}
       renderEmptyData={() => {
        return (
         <View style={styles.center}>
          <Text
           style={{
            color: '#172C5D',
            fontSize: 20,
            marginTop: 30,
           }}>
           Sin citas agendadas
          </Text>
         </View>
        );
       }}
      />
     </View>
    </View>
   </View>
  </SafeAreaProvider>
 );
};

export default AssignedVisitsComponent;
