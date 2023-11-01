import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import LegalizationsComponent from "./Legalizations.component";
import { legalizationList } from "../../client";
import moment from "moment";
import { Constants } from "../../common";
import { useNavigation } from "@react-navigation/native";

const LegalizationsScreen = (props) => {
  const navigation = useNavigation();
  const [legalizations, setLegalizations] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const tableHead = ["Tipo", "Fecha", "Concepto", "Estado", "Ver"];
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    let list = [];
    const resLista = await legalizationList();
    resLista.data.forEach((element, index) => {
      const fecha = moment(element.created_at, moment.ISO_8601).format(
        "DD-MM-YYYY HH:mm"
      );
      const id = element.id;
      const Tipo = element.legalization_type;
      var Concepto = "";
      const Customer = element.customer.tradename;
      const WorkOrder = element.work_order.assigned_uuid;
      element.legalization_type == "Logistico"
        ? (Concepto = element.logistic_fee_basis)
        : (Concepto = element.purchase_fee_basis);
      var estado;
      switch (element.state) {
        case "pre_approved":
          estado = "Preaprobado";
          break;
        case "created":
          estado = "Creada";
          break;
        case "with_entry_document":
          estado = "Con Documento De Entrada";
          break;
        case "accounted":
          estado = "Contabilizada";
          break;
        case "filled":
          estado = "Archivada";
        case "accepted":
          estado = "Aceptada";
        case "rejected":
          estado = "Rechazada";
          break;

        default:
          break;
      }
      list.push([Tipo, fecha, Concepto, estado, id, Customer, WorkOrder]);
    });
    setLegalizations(list);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchList();
    setRefreshing(false);
  }, []);

  function onPressIcon(data) {
    navigation.navigate(Constants.screens.LegalizationView, { data: data });
  }
  return (
    <LegalizationsComponent
      legalizations={legalizations}
      tableHead={tableHead}
      onPressIcon={onPressIcon}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default LegalizationsScreen;
