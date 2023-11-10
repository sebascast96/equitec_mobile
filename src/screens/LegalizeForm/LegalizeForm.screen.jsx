import React, { useState, useCallback, useEffect } from "react";
import LegalizeFormComponent from "./LegalizeForm.component";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "../../common";
import * as ImagePicker from "expo-image-picker";
import NetInfo from "@react-native-community/netinfo";
import * as TaskManager from "expo-task-manager"
const serverCallModalIntialState = {
  title: Constants.language.generic.sorry,
  primaryButtonLabel: Constants.language.generic.accept,
  isModalVisible: false,
};
const LegalizeFormScreen = (props) => {
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);
  const [invalidModal, setInvalidModal] = useState(serverCallModalIntialState);
  const [validModal, setValidModal] = useState(serverCallModalIntialState);
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
  const [tableData, setTableData] = useState([["0", "0", "0", "0"]]);
  //CAMERA
  const [camImage, setCamImage] = useState(null);
  const { visit } = props.route.params;

  const legalize = async (info) => {
    let url =
      "http://equitec-mobile-app-v2-8e504453cc53.herokuapp.com/api/v1/legalizations";
    try {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      let token = await AsyncStorage.getItem("token");
      xhr.setRequestHeader("Authorization", token);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == 201) {
            setValidModal({
              ...validModal,
              title: "EXITO",
              subtitle: "Legalización cargada correctamente",
              isModalVisible: true,
            });
          } else {
            setInvalidModal({
              ...invalidModal,
              title: Constants.language.generic.sorry,
              subtitle: JSON.parse(xhr.responseText).errors,
              isModalVisible: true,
            });
          }

          setShowSpinner(false);
          return xhr.response;
        }
      };
      xhr.send(info);
    } catch (error) {
      console.log(error);
    }
  };
  const offlineLegalize = async (info) => {
    try {
      let cachedInfo =await AsyncStorage.getItem("legalizationInfo")
    console.log("INFO: ",info)
    console.log("cachedInfo: ",cachedInfo)
    cachedInfo=JSON.parse(cachedInfo);
    if (cachedInfo==null) {
      cachedInfo=[];
    }
    cachedInfo.push(info);
     await AsyncStorage.setItem("legalizationInfo", JSON.stringify(cachedInfo));
     await AsyncStorage.setItem("legalizationPending", JSON.stringify(true));
    setShowSpinner(false);
    setValidModal({
      ...validModal,
      title: "EXITO",
      subtitle: "Legalización guardada para guardarla cuando se conecte a la red",
      isModalVisible: true,
    });
    } catch (error) {
      setShowSpinner(false);
    setValidModal({
      ...validModal,
      title: "ERROR",
      subtitle: error,
      isModalVisible: true,
    });
    }
    
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result.assets[0].uri.split("/")[9]);

    if (!result.canceled) {
      setCamImage(result);
      setResult("Imagen de la camara");
      setResult2(null);
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
      setCamImage(null);
      setResult(doc.name);
      setResult2(doc);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    setValueLogistic(null);
    setValueBuy(null);
    setTableData([["0", "0", "0", "0"]]);
  }, [valueTipo]);
  useEffect(() => {
    setTableData([["0", "0", "0", "0"]]);
  }, [valueLogistic, valueBuy]);

  function handlePressBack() {
    navigation.goBack();
  }
  const handlePressSave = async () => {
    if (result2 == null && camImage == null) {
      setInvalidModal({
        ...invalidModal,
        title: Constants.language.generic.sorry,
        subtitle: "La imagen no puede ir vacia",
        isModalVisible: true,
      });
      return;
    }
    if (
      valueBefore == "0" ||
      valueAfter == "0" ||
      valueTipo == null ||
      valuePay == null
    ) {
      setInvalidModal({
        ...invalidModal,
        title: Constants.language.generic.sorry,
        subtitle: "Por favor llena todos los datos",
        isModalVisible: true,
      });
      return;
    }
    setShowSpinner(true);
    const formData = new FormData();
    if (camImage == null) {
      formData.append("legalization[bill_file]", {
        uri: result2.uri,
        name: result2.name,
        type: result2.mimeType,
      });
    } else {
      formData.append("legalization[bill_file]", {
        uri: camImage.assets[0].uri,
        name: camImage.assets[0].uri.split("/")[9],
        type: "image/jpeg",
      });
    }
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
    if (valueTipo == "Logistico") {
      if (valueLogistic == null) {
        
    setShowSpinner(false);
        setInvalidModal({
          ...invalidModal,
          title: Constants.language.generic.sorry,
          subtitle: "Por favor llena todos los datos",
          isModalVisible: true,
        });
        return;
      }
      formData.append("legalization[logistic_fee_basis]", valueLogistic);
    } else if (valueTipo == "Compra") {
      if (valueBuy == null) {
        setShowSpinner(false);
        setInvalidModal({
          ...invalidModal,
          title: Constants.language.generic.sorry,
          subtitle: "Por favor llena todos los datos",
          isModalVisible: true,
        });
        return;
      }
      formData.append("legalization[purchase_fee_basis]", valueBuy);
    }
    if (valueLogistic == "Transporte") {
      if (valueTransport == null || comment == "") {
        setShowSpinner(false);
        setInvalidModal({
          ...invalidModal,
          title: Constants.language.generic.sorry,
          subtitle: "Por favor llena todos los datos",
          isModalVisible: true,
        });
        return;
      }
      formData.append("legalization[transport_type]", valueTransport);
      formData.append("legalization[comment]", comment);
    } else if (valueLogistic == "Otro") {
      if (otherConcept == "") {
        setShowSpinner(false);
        setInvalidModal({
          ...invalidModal,
          title: Constants.language.generic.sorry,
          subtitle: "Por favor llena todos los datos",
          isModalVisible: true,
        });
        return;
      }
      formData.append("legalization[other_logistic_fee_basis]", otherConcept);
    }
    if (valueBuy == "ACPM") {
      if (valueACPM == "") {
        setShowSpinner(false);
        setInvalidModal({
          ...invalidModal,
          title: Constants.language.generic.sorry,
          subtitle: "Por favor llena todos los datos",
          isModalVisible: true,
        });
        return;
      }
      formData.append("legalization[acpm_amount]", valueACPM);
    } else if (valueBuy == "Servicio Tercerizado") {
      if (thirdService == "") {
        setShowSpinner(false);
        setInvalidModal({
          ...invalidModal,
          title: Constants.language.generic.sorry,
          subtitle: "Por favor llena todos los datos",
          isModalVisible: true,
        });
        return;
      }
      formData.append("legalization[outsourced_service]", thirdService);
    }
    if (valueBuy == "Insumo") {
      if (tableData == [["0", "0", "0", "0"]]) {
        setShowSpinner(false);
        setInvalidModal({
          ...invalidModal,
          title: Constants.language.generic.sorry,
          subtitle: "Por favor llena todos los datos",
          isModalVisible: true,
        });
        return;
      }
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
    }
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        legalize(formData);
      } else {
        offlineLegalize(formData);
      }
    });
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
      //Camera
      pickImage={pickImage}
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
