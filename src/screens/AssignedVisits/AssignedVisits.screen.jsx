import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { visitList } from "../../client";
import AssignedVisitsComponent from "./AssignedVisits.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../common";
import moment from 'moment';

const AssignedVisitsScreen = (props) => {
  const navigation = useNavigation();
  const [lista, setLista] = useState();
  useEffect(() => {
    fetchList();
  }, []);
  // useEffect(() => {
  //   console.log("lista Completa", lista);
  // }, [lista]);

  const fetchList = async () => {
    const resLista = await visitList();
     console.log("Lista resul",resLista.data);
    let listaCalendar = {};
    resLista.data.forEach((element) => {
      const fecha = moment(element.start,moment.ISO_8601).format("YYYY-MM-DD");
      listaCalendar[fecha] = [];
    });
    resLista.data.forEach((element)=>{
      const fecha = moment(element.start,moment.ISO_8601).format("YYYY-MM-DD");
      const id = element.id;
      const Cliente = element.title;
      const Concepto = element.detail;
      listaCalendar[fecha].push({ id: id, Cliente: Cliente, fecha: fecha, Concepto: Concepto });
    })
    console.log("lista calendar",listaCalendar);
    setLista(listaCalendar);
  };

  const onPressVisit = (visitId) => {
    navigation.navigate(Constants.screens.VisitForm, { visitId: visitId });
  };

  return <AssignedVisitsComponent lista={lista} onPressVisit={onPressVisit} />;
};

export default AssignedVisitsScreen;
