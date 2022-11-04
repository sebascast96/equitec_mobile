import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { visitList } from "../../client";
import AssignedVisitsComponent from "./AssignedVisits.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../common";

const AssignedVisitsScreen = (props) => {
  const navigation = useNavigation();
  const [lista, setLista] = useState();
  useEffect(() => {
    fetchList();
  }, []);
  useEffect(() => {
    console.log("lista Completa", lista);
  }, [lista]);

  const fetchList = async () => {
    const id = await AsyncStorage.getItem("@id");
    const resLista = await visitList(id);
    const listaLimpia = resLista.filter(
      (element) => element["Fecha tentativa de la visita:"] != null
    );
    let listaCalendar = {};
    listaLimpia.forEach((element) => {
      const fecha = element["Fecha tentativa de la visita:"];
      const id = element["Visita #:"];
      const Cliente = element["Cliente:"];
      const Concepto = element["Concepto:"];
      listaCalendar[fecha] = [{ id: id, Cliente: Cliente, fecha: fecha, Concepto: Concepto }];
    });

    setLista(listaCalendar);
  };

  const onPressVisit = (visitId) => {
    navigation.navigate(Constants.screens.VisitForm, { visitId: visitId });
  };

  return <AssignedVisitsComponent lista={lista} onPressVisit={onPressVisit} />;
};

export default AssignedVisitsScreen;
