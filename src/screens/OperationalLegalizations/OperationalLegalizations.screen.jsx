import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import OperationalLegalizationsComponent from "./OperationalLegalizations.component";
import NetInfo from "@react-native-community/netinfo";
import { customerList } from "../../client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../common";

const OperationalLegalizationsScreen = (props) => {
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(true);
  const [openCust, setOpenCust] = useState(false);
  const [valueCust, setValueCust] = useState(null);
  const [itemsCust, setItemsCust] = useState([]);
  const [openWO, setOpenWO] = useState(false);
  const [valueWO, setValueWO] = useState(null);
  const [itemsWO, setItemsWO] = useState([]);
  const [openEvents, setOpenEvents] = useState(false);
  const [valueEvents, setValueEvents] = useState(null);
  const [itemsEvents, setItemsEvents] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        fetchCustomers();
      } else {
        setList();
      }
    });
  }, []);

  const fetchCustomers = async () => {
    const resLista = await customerList();
    console.log("STATUS", resLista.data);
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
        subtitle:
          "Por favor intenta de nuevo mas tarde, se cargaran los datos del cache",
        isModalVisible: true,
      });
      setList();
    }
    setLista(resLista.data);
    let customers = [];
    resLista.data.forEach((element) => {
      const id = element.id;
      const name = element.tradename;
      customers.push({
        label: name,
        value: id,
      });
    });
    await AsyncStorage.setItem("customers", JSON.stringify(lista));
    setItemsCust(customers);
    console.log("CUSTOMERS: ", customers);

    setShowSpinner(false);
  };

  useEffect(() => {
    const found = lista.find((element) => element.id == valueCust);
    //console.log("CUST: ", found.work_orders);
    let workOrders = [];
    if (found != undefined) {
      console.log("CUST: ", found.work_orders);
      found.work_orders.forEach((element) => {
        const id = element.value;
        const name = element.text;
        workOrders.push({
          label: name,
          value: id,
        });
      });
      setItemsWO(workOrders);
    }
    setItemsEvents([]);
    setValueEvents(null);
    setValueWO(null);
  }, [valueCust]);

  useEffect(() => {
    const found = lista.find((element) => element.id == valueCust);

    //console.log("CUST: ", found.events);
    if (found != undefined) {
      console.log(found.work_orders);
      const found2 = found.work_orders.find(
        (element) => element.value == valueWO
      );
      let events = [];
      if (found2 != undefined) {
        console.log("EVENTS ", found2);
        found2.events.forEach((element) => {
          const id = element.value;
          const name = element.text;
          events.push({
            label: name,
            value: id,
          });
        });
        setItemsEvents(events);
      }
    }
    setValueEvents(null);
  }, [valueWO]);

  useEffect(() => {
    if (valueEvents != null) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [valueEvents]);

  useEffect(() => {
    if (openCust == true) {
      setOpenEvents(false);
      setOpenWO(false);
    }
  }, [openCust]);
  useEffect(() => {
    if (openWO == true) {
      setOpenCust(false);
      setOpenEvents(false);
    }
  }, [openWO]);
  useEffect(() => {
    if (openEvents == true) {
      setOpenCust(false);
      setOpenWO(false);
    }
  }, [openEvents]);

  const setList = async () => {
    //const visitasLista = await AsyncStorage.getItem("customers");
    //setLista(JSON.parse(visitasLista));
    setShowSpinner(false);
  };
  const handlePressSave = async () => {
    keys = await AsyncStorage.getItem("userID");
    visit = {
      id: valueEvents,
      visit: {
        work_order_uuid: valueWO,
        customer_id: valueCust,
        technicians: [{ id: keys }],
      },
    };
    navigation.navigate(Constants.screens.LegalizeForm, { visit: visit });
    console.log(valueCust, valueEvents, valueWO);
  };

  return (
    <OperationalLegalizationsComponent
      //Customers dropdown
      openCust={openCust}
      valueCust={valueCust}
      itemsCust={itemsCust}
      setOpenCust={setOpenCust}
      setValueCust={setValueCust}
      setItemsCust={setItemsCust}
      openWO={openWO}
      valueWO={valueWO}
      itemsWO={itemsWO}
      setOpenWO={setOpenWO}
      setValueWO={setValueWO}
      setItemsWO={setItemsWO}
      openEvents={openEvents}
      valueEvents={valueEvents}
      itemsEvents={itemsEvents}
      setOpenEvents={setOpenEvents}
      setValueEvents={setValueEvents}
      setItemsEvents={setItemsEvents}
      handlePressSave={handlePressSave}
      buttonDisabled={buttonDisabled}
      showSpinner={showSpinner}
    />
  );
};

export default OperationalLegalizationsScreen;
