import React, { useEffect, useRef, useState } from "react";
import { visitList } from "../../client";
import AssignedVisitsComponent from "./AssignedVisits.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../common";
import moment from "moment";
import { BackHandler } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const invalidCredentialsModalIntialState = {
  title: Constants.language.generic.sorry,
  primaryButtonLabel: Constants.language.generic.accept,
  isModalVisible: false,
};
const AssignedVisitsScreen = (props) => {
  const navigation = useNavigation();
  const [lista, setLista] = useState();
  const [showSpinner,setShowSpinner] = useState(false);
  const [invalidModal, setInvalidModal] = useState(
    invalidCredentialsModalIntialState
  );
  const [legalModal, setLegalModal] = useState(
    invalidCredentialsModalIntialState
  );
  const [refreshing, setRefreshing] = useState(false);
  async function checkLogin  () {
    setShowSpinner(true);
    const legalize = await AsyncStorage.getItem("successfulLegalization");
    if(legalize!=null){
        setShowSpinner(false)
        if(legalize){
          AsyncStorage.removeItem("successfulLegalization")
        setLegalModal({
            ...legalModal,
            title: "EXITO",
            subtitle: "Se cargaron todas las legalizaciones",
            isModalVisible: true,
           });
        }
        else{
        setLegalModal({
            ...legalModal,
            subtitle: "Falló la carga de legalizaciones",
            isModalVisible: true,
           });
        }
    }
  }
  const refLista = useRef(lista);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        fetchList();
      } else {
        setList();
      }
    });
    setRefreshing(false);
  }, []);
  useEffect(() => {
    checkLogin();
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        fetchList();
      } else {
        setList();
      }
    });
  }, []);
  // useEffect(() => {
  //   console.log("lista Completa", lista);
  // }, [lista]);
  useEffect(() => {
    const backAction = () => {
      console.log("Atras");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const fetchList = async () => {
    const resLista = await visitList();
    console.log("STATUS",resLista.status);
    if (resLista.status == 401) {
      await AsyncStorage.removeItem("token");
      setInvalidModal({
        ...invalidModal,
        title: "Token expirado",
        subtitle: "Por favor inicia sesión de nuevo",
        isModalVisible: true,
      });
    } else if (resLista.data.hasOwnProperty("errors")) {
      setInvalidModal({
        ...invalidModal,
        title: "ERROR",
        subtitle: "Por favor intenta de nuevo mas tarde, se cargaran los datos del cache",
        isModalVisible: true,
      });
      setList();
    }

    let listaCalendar = {};
    resLista.data.forEach((element) => {
      const fecha = moment(element.start, moment.ISO_8601).format("YYYY-MM-DD");
      listaCalendar[fecha] = [];
    });
    resLista.data.forEach((element) => {
      const fecha = moment(element.start, moment.ISO_8601).format("YYYY-MM-DD");
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
    await AsyncStorage.setItem("visits", JSON.stringify(listaCalendar));
    setLista(listaCalendar);
  };

  const setList = async () => {
    const visitasLista = await AsyncStorage.getItem("visits");
    setLista(JSON.parse(visitasLista));
  };

  const onPressVisit = (visit) => {
    navigation.navigate(Constants.screens.VisitInfo, { visit: visit });
  };
  const acceptModal = async () => {
    setInvalidModal({
      ...invalidModal,
      isModalVisible: false,
    });
    navigation.navigate(Constants.screens.Login);
  };
  const acceptModalLegal = async () => {
    await AsyncStorage.removeItem("successfulLegalization");
    setLegalModal({
      ...legalModal,
      isModalVisible: false,
    });
  };
  return (
    <AssignedVisitsComponent
      lista={lista}
      onPressVisit={onPressVisit}
      refLista={refLista}
      invalidModal={invalidModal}
      acceptModal={acceptModal}
      refreshing={refreshing}
      onRefresh={onRefresh}
      legalModal={legalModal}
      acceptModalLegal={acceptModalLegal}
    />
  );
};

export default AssignedVisitsScreen;
