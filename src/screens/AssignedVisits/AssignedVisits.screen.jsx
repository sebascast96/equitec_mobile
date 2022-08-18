import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { visitList } from "../../client";
import AssignedVisitsComponent from "./AssignedVisits.component";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AssignedVisitsScreen = (props) => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const id = await AsyncStorage.getItem("@id");
    setLista(await visitList(id));
    console.log("lista", lista[0]);
  };

  return <AssignedVisitsComponent lista={lista} />;
};

export default AssignedVisitsScreen;
