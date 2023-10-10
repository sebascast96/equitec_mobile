import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { visitList } from '../../client';
import AssignedVisitsComponent from './AssignedVisits.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Constants } from '../../common';
import moment from 'moment';
const visitInfoModalInitialState = {
 title: Constants.language.screensText.assignedVisits.modalTitle,
 primaryButtonLabel: Constants.language.screensText.assignedVisits.legalize,
 isModalVisible: false,
};
const AssignedVisitsScreen = (props) => {
 const navigation = useNavigation();
 const [lista, setLista] = useState();
 const refLista = useRef(lista);

 const [visitInfoModal, setVisitInfoModal] = useState(
  visitInfoModalInitialState
 );
 useEffect(() => {
  fetchList();
 }, []);
 // useEffect(() => {
 //   console.log("lista Completa", lista);
 // }, [lista]);

 const fetchList = async () => {
  const resLista = await visitList();
  let listaCalendar = {};
  resLista.data.forEach((element) => {
   const fecha = moment(element.start, moment.ISO_8601).format('YYYY-MM-DD');
   listaCalendar[fecha] = [];
  });
  resLista.data.forEach((element) => {
   const fecha = moment(element.start, moment.ISO_8601).format('YYYY-MM-DD');
   const id = element.id;
   const Cliente = element.title;
   const Concepto = element.detail;
   listaCalendar[fecha].push({
    id: id,
    Cliente: Cliente,
    fecha: fecha,
    Concepto: Concepto,
    visit: element,
   });
  });
  setLista(listaCalendar);
 };

 const onPressVisit = (visit) => {
  navigation.navigate(Constants.screens.VisitInfo, { visit: visit });
 };

 return (
  <AssignedVisitsComponent
   lista={lista}
   onPressVisit={onPressVisit}
   refLista={refLista}
  />
 );
};

export default AssignedVisitsScreen;
