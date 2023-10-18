import React, { useState, useCallback, useEffect } from "react";
import LegalizeFormComponent from "./LegalizeForm.component";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "../../common";
const serverCallModalIntialState = {
  title: Constants.language.generic.sorry,
  primaryButtonLabel: Constants.language.generic.accept,
  isModalVisible: false,
 };
const LegalizeFormScreen = (props) => {
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);
  const [invalidModal, setInvalidModal] = useState(
    serverCallModalIntialState
   );
   const [validModal, setValidModal] = useState(
     serverCallModalIntialState
    );
  const [openTipo, setOpenTipo] = useState(false);
  const [valueTipo, setValueTipo] = useState(null);
  const [itemsTipo, setItemsTipo] = useState([
    { label: "Logistico", value: "Logistico" },
    { label: "Compra", value: "Compra" },
  ]);
  const [openPay, setOpenPay] = useState(false);
  const [valuePay, setValuePay] = useState(null);
  const [itemsPay, setItemsPay] = useState([
    { label: "Efectivo", value: "Efectivo" },
    { label: "Tarjeta", value: "Tarjeta" },
  ]);
  const [openTransport, setOpenTransport] = useState(false);
  const [valueTransport, setValueTransport] = useState(null);
  const [itemsTransport, setItemsTransport] = useState([
    { label: "Taxi", value: "Taxi" },
    { label: "Bus Local", value: "Bus Local" },
    { label: "Bus Intermunicipal", value: "Bus Intermunicipal" },
    { label: "Transmilenio", value: "Transmilenio" },
    { label: "Plataforma", value: "Plataforma" },
    { label: "Otro Transporte", value: "Otro Transporte" },
  ]);
  const [openLogistic, setOpenLogistic] = useState(false);
  const [valueLogistic, setValueLogistic] = useState(null);
  const [itemsLogistic, setItemsLogistic] = useState([
    { label: "Hotel", value: "Hotel" },
    { label: "Transporte", value: "Transporte" },
    { label: "Alimentación", value: "Alimentación" },
    { label: "Peaje", value: "Peaje" },
    { label: "Parqueadero", value: "Parqueadero" },
    { label: "Otro", value: "Otro" },
  ]);
  const [openBuy, setOpenBuy] = useState(false);
  const [valueBuy, setValueBuy] = useState(null);
  const [itemsBuy, setItemsBuy] = useState([
    { label: "Insumo", value: "Insumo" },
    { label: "ACPM", value: "ACPM" },
    { label: "Servicio tercerizado", value: "Servicio Tercerizado" },
  ]);
  const [valueBefore, setValueBefore] = useState("0");
  const [valueAfter, setValueAfter] = useState("0");
  const [comment, setComment] = useState("");
  const [otherConcept, setOtherConcept] = useState("");
  const [valueACPM, setValueACPM] = useState("");
  const [thirdService, setThirdService] = useState("");
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState(null);
  const [tableHead, setTableHead] = useState([
    "Nombre",
    "Cantidad",
    "Valor unitario",
    "Eliminar",
  ]);
  const [tableData, setTableData] = useState([
    ["0", "0", "0", "0"],
  ]);
  const { visit } = props.route.params;

  const legalize = async (info) => {
    let url = "http://equitec-mobile-app-v2-8e504453cc53.herokuapp.com/api/v1/legalizations";
    try {
      let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    let token = await AsyncStorage.getItem("token");
    xhr.setRequestHeader("Authorization", token);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if(xhr.status==201){
          setValidModal({
            ...validModal,
            title:"EXITO",
            subtitle: "Legalización cargada correctamente",
            isModalVisible: true,
           });
        }
        else{
          setInvalidModal({
            ...invalidModal,
            title:Constants.language.generic.sorry,
            subtitle: JSON.parse(xhr.responseText).errors,
            isModalVisible: true,
           });
        }
        console.log("Response status: ",xhr.status);
        
        return xhr.response;
    }
    };
    xhr.send(info);
    } catch (error) {
      console.log(error)
    }
  };

  const acceptModal = () => {
    setInvalidModal({
     ...invalidModal,
     isModalVisible: false,
    });
   };

   const acceptModalBack = () => {
    setInvalidModal({
     ...invalidModal,
     isModalVisible: false,
    });
    handlePressBack();
   };
  const handleDocumentSelection = useCallback(async () => {
    try {
      let doc = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
      });
      setResult(doc.name);
      setResult2(doc);
      console.log("uri saved ", doc.uri);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    setValueLogistic(null);
    setValueBuy(null);
    setTableData([
      ["0", "0", "0", "0"],
    ])
  }, [valueTipo]);
  useEffect(() => {
    setTableData([
      ["0", "0", "0", "0"],
    ])
  }, [valueLogistic,valueBuy]);

  function handlePressBack() {
    navigation.goBack();
  }
  const handlePressSave = async () => {
    const formData = new FormData();
    formData.append("legalization[bill_file]", {
      uri: result2.uri,
      name: result2.name,
      type: result2.mimeType,
    });
    formData.append("legalization[customer_id]", visit.visit.customer_id);
    formData.append(
      "legalization[work_order_uuid]",
      visit.visit.work_order_uuid
    );
    formData.append("legalization[event_id]", visit.id);
    formData.append("legalization[before_taxes_total]", valueBefore);
    formData.append("legalization[after_taxes_total]", valueAfter);
    formData.append("legalization[payment_method]", valuePay);
    formData.append("legalization[legalization_type]", valueTipo);
    formData.append("legalization[user_id]", visit.visit.technicians[0].id);
    if (valueTipo == 'Logistico') {
      formData.append("legalization[logistic_fee_basis]", valueLogistic);
    } else if (valueTipo == 'Compra') {
      formData.append("legalization[purchase_fee_basis]", valueBuy);
    }
    if (valueLogistic == 'Transporte') {
      formData.append("legalization[transport_type]", valueTransport);
      formData.append("legalization[comment]", comment);
    } else if (valueLogistic == 'Otro') {
      formData.append("legalization[other_logistic_fee_basis]", otherConcept);
    }
    if (valueBuy == 'ACPM') {
      formData.append("legalization[acpm_amount]", valueACPM);
    } else if (valueBuy == 'Servicio Tercerizado') {
      formData.append("legalization[outsourced_service]", thirdService);
    }
    if (valueBuy == 'Insumo') {
      var supply = [];
      var amount = [];
      var unitary_value = [];
      tableData.filter(function (d, i) {
        formData.append("legalized_supply[supply][]", d[0]);
        formData.append("legalized_supply[amount][]", d[1]);
        formData.append("legalized_supply[unitary_value][]", d[2]);
        supply.push(d[0]);
        amount.push(d[1]);
        unitary_value.push(d[2]);
      });
      // formData.append("legalized_supply[supply][]", supply);
      // formData.append("legalized_supply[amount][]", amount);
      // formData.append("legalized_supply[unitary_value][]", unitary_value);
      console.log("supply: ", supply);
      console.log("amount: ", amount);
      console.log("unit_value: ", unitary_value);
    }
    console.log(formData);
    setShowSpinner(true);
    const res = await legalize(formData);
    setShowSpinner(false);
    console.log("RESPONSE",res);
  };

  function removeRow(index) {
    setTableData((tableData) => tableData.filter((d, i) => i != index));
  }

  function addRow() {
    setTableData([...tableData, [0, 0, 0, 0]]);
  }

  function onChangeTextTable(index, text, cellIndex) {
    newArray = tableData;
    newArray[index][cellIndex] = text;
    setTableData(newArray);
  }
  return (
    <LegalizeFormComponent
      //Legalization type dropdown
      openTipo={openTipo}
      valueTipo={valueTipo}
      itemsTipo={itemsTipo}
      setOpenTipo={setOpenTipo}
      setValueTipo={setValueTipo}
      setItemsTipo={setItemsTipo}
      //Payment type dropdown
      openPay={openPay}
      valuePay={valuePay}
      itemsPay={itemsPay}
      setOpenPay={setOpenPay}
      setValuePay={setValuePay}
      setItemsPay={setItemsPay}
      //Payment type dropdown
      openTransport={openTransport}
      valueTransport={valueTransport}
      itemsTransport={itemsTransport}
      setOpenTransport={setOpenTransport}
      setValueTransport={setValueTransport}
      setItemsTransport={setItemsTransport}
      //Logistics type dropdown
      openLogistic={openLogistic}
      valueLogistic={valueLogistic}
      itemsLogistic={itemsLogistic}
      setOpenLogistic={setOpenLogistic}
      setValueLogistic={setValueLogistic}
      setItemsLogistic={setItemsLogistic}
      //Buy type dropdown
      openBuy={openBuy}
      valueBuy={valueBuy}
      itemsBuy={itemsBuy}
      setOpenBuy={setOpenBuy}
      setValueBuy={setValueBuy}
      setItemsBuy={setItemsBuy}
      //Value before and after taxes
      valueBefore={valueBefore}
      valueAfter={valueAfter}
      setValueBefore={setValueBefore}
      setValueAfter={setValueAfter}
      //Comment
      comment={comment}
      setComment={setComment}
      //otherConcept
      otherConcept={otherConcept}
      setOtherConcept={setOtherConcept}
      //ACPM value
      valueACPM={valueACPM}
      setValueACPM={setValueACPM}
      //Third party service
      thirdService={thirdService}
      setThirdService={setThirdService}
      //file options
      handleDocumentSelection={handleDocumentSelection}
      valueFile={result}
      //Buttons
      handlePressBack={handlePressBack}
      handlePressSave={handlePressSave}
      //Table
      tableData={tableData}
      tableHead={tableHead}
      removeRow={removeRow}
      addRow={addRow}
      onChangeTextTable={onChangeTextTable}
      //Extras
      acceptModal={acceptModal}
      invalidModal={invalidModal}
      validModal={validModal}
      acceptModalBack={acceptModalBack}
      showSpinner={showSpinner}
    />
  );
};

export default LegalizeFormScreen;
