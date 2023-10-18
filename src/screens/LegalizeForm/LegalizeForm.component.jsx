import React from "react";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Pressable, ScrollView, ViewBase } from "react-native";
import Typography from "../../components/Typography";
import DropDownPicker from "react-native-dropdown-picker";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../../common/index";
import LoadingSpinner from "../../components/Spinner/Spinner.component";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import AlertsComponent from "../../components/Alerts/Alerts";

const LegalizeFormComponent = (props) => {
  const {
    //Legalization type dropdown
    openTipo,
    itemsTipo,
    valueTipo,
    setOpenTipo,
    setItemsTipo,
    setValueTipo,
    //Payment method dropdown
    openPay,
    itemsPay,
    valuePay,
    setOpenPay,
    setItemsPay,
    setValuePay,
    //Transport type dropdown
    openTransport,
    itemsTransport,
    valueTransport,
    setOpenTransport,
    setItemsTransport,
    setValueTransport,
    //Logistic dropdown
    openLogistic,
    itemsLogistic,
    valueLogistic,
    setOpenLogistic,
    setItemsLogistic,
    setValueLogistic,
    //Buy dropdown
    openBuy,
    itemsBuy,
    valueBuy,
    setOpenBuy,
    setItemsBuy,
    setValueBuy,
    //Value before and after taxes
    valueBefore,
    valueAfter,
    setValueBefore,
    setValueAfter,
    //Comment
    comment,
    setComment,
    //Concept
    otherConcept,
    setOtherConcept,
    //ACPM value
    valueACPM,
    setValueACPM,
    //Third party service
    thirdService,
    setThirdService,
    //Table
    tableHead,
    tableData,
    removeRow,
    addRow,
    handleDocumentSelection,
    handlePressBack,
    handlePressSave,
    valueFile,
    showSpinner,
    onChangeTextTable,
    invalidModal,
    acceptModal,
    validModal,
    acceptModalBack
  } = props;

  const element = (data, index) => (
    <Pressable onPress={()=>removeRow(index)} style={{alignItems:'center'}}>
      <Ionicons
        name={"trash"}
        color={"red"}
        size={40}
      />
    </Pressable>
  );

  const element2 = (data, index, cellIndex) => (
    <TextInput
      style={styles.inputStyleTable}
      keyboardType={cellIndex == 0 ? "default" : "number-pad"}
      onChangeText={(text) => onChangeTextTable(index, text, cellIndex)}
    />
  );

  return (
    <SafeAreaProvider>
      <ScrollView nestedScrollEnabled={true}>
   <AlertsComponent
    modalParams={invalidModal}
    handlePressPrimary={acceptModal}
   />
   <AlertsComponent
    modalParams={validModal}
    handlePressPrimary={acceptModalBack}
   />
        <LoadingSpinner showSpinner={showSpinner} animation={"none"} />
        <View style={styles.legalizeformScreen}>
          <View style={styles.legalizeformContainer}>
            <View style={styles.paragraphSize}>
              <Typography
                type={"h5"}
                style={styles.titulo}
                text={"Realizar legalización"}
              />
              <Typography type={"h5"} text={"Tipo de legalización"} />
              <DropDownPicker
                listMode="SCROLLVIEW"
                placeholder="Tipo de legalización"
                placeholderStyle={{
                  color: "grey",
                  fontWeight: "bold",
                }}
                containerStyle={{}}
                style={{
                  height: 45,
                  marginBottom: 15,
                  borderRadius: 50,
                  borderWidth: 0,
                }}
                open={openTipo}
                value={valueTipo}
                items={itemsTipo}
                setOpen={setOpenTipo}
                setValue={setValueTipo}
                setItems={setItemsTipo}
              />
              <Typography
                style={{ zIndex: -1 }}
                type={"h5"}
                text={"Archivo de factura"}
              />
              <View style={styles.uploadContainer}>
                <TextInput
                  style={styles.inputStyleUpload}
                  placeholder=""
                  value={valueFile}
                  editable={false}
                  selectTextOnFocus={false}
                />
                <Pressable onPress={handleDocumentSelection}>
                  <Ionicons
                    name={"cloud-upload"}
                    color={Theme.colors.mainOrange}
                    size={40}
                  />
                </Pressable>
              </View>
              <Typography type={"h5"} text={"Metodo de pago"} />
              <DropDownPicker
                listMode="SCROLLVIEW"
                placeholder="Metodo de pago"
                placeholderStyle={{
                  color: "grey",
                  fontWeight: "bold",
                }}
                containerStyle={{}}
                style={{
                  height: 45,
                  marginBottom: 15,
                  borderRadius: 50,
                  borderWidth: 0,
                }}
                open={openPay}
                value={valuePay}
                items={itemsPay}
                setOpen={setOpenPay}
                setValue={setValuePay}
                setItems={setItemsPay}
              />
              <Typography
                style={{ zIndex: -1 }}
                type={"h5"}
                text={"Valor total antes de impuestos"}
              />
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Valor antes de impuestos"
                value={valueBefore}
                autoCapitalize={"none"}
                keyboardType={"number-pad"}
                onChangeText={(text) => {
                  setValueBefore(text.replace(/[^0-9.]/g, ""));
                }}
              />
              <Typography
                type={"h5"}
                text={"Valor total despues de impuestos"}
              />
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Valor antes de impuestos"
                value={valueAfter}
                autoCapitalize={"none"}
                keyboardType={"number-pad"}
                onChangeText={(text) => {
                  setValueAfter(text.replace(/[^0-9.]/g, ""));
                }}
              />
              {valueTipo != null ? (
                valueTipo == 'Logistico' ? (
                  <View>
                    <Typography type={"h5"} text={"Logistico"} />
                    <DropDownPicker
                      listMode="SCROLLVIEW"
                      placeholder="Tipo de legalización"
                      placeholderStyle={{
                        color: "grey",
                        fontWeight: "bold",
                      }}
                      containerStyle={{}}
                      style={{
                        height: 45,
                        marginBottom: 15,
                        borderRadius: 50,
                        borderWidth: 0,
                      }}
                      open={openLogistic}
                      value={valueLogistic}
                      items={itemsLogistic}
                      setOpen={setOpenLogistic}
                      setValue={setValueLogistic}
                      setItems={setItemsLogistic}
                    />
                  </View>
                ) : (
                  <View>
                    <Typography type={"h5"} text={"Compra"} />
                    <DropDownPicker
                      listMode="SCROLLVIEW"
                      placeholder="Tipo de legalización"
                      placeholderStyle={{
                        color: "grey",
                        fontWeight: "bold",
                      }}
                      containerStyle={{}}
                      style={{
                        height: 45,
                        marginBottom: 15,
                        borderRadius: 50,
                        borderWidth: 0,
                      }}
                      open={openBuy}
                      value={valueBuy}
                      items={itemsBuy}
                      setOpen={setOpenBuy}
                      setValue={setValueBuy}
                      setItems={setItemsBuy}
                    />
                  </View>
                )
              ) : null}

              {valueLogistic == 'Transporte' ? (
                <View>
                  <Typography type={"h5"} text={"Tipo de transporte"} />
                  <DropDownPicker
                    listMode="SCROLLVIEW"
                    placeholder="Tipo de transporte"
                    placeholderStyle={{
                      color: "grey",
                      fontWeight: "bold",
                    }}
                    containerStyle={{}}
                    style={{
                      height: 45,
                      marginBottom: 15,
                      borderRadius: 50,
                      borderWidth: 0,
                    }}
                    open={openTransport}
                    value={valueTransport}
                    items={itemsTransport}
                    setOpen={setOpenTransport}
                    setValue={setValueTransport}
                    setItems={setItemsTransport}
                  />

                  <Typography type={"h5"} text={"Comentario"} />
                  <TextInput
                    style={styles.inputStyle}
                    autoCorrect={false}
                    placeholder="Origen, destino y justificación"
                    value={comment}
                    autoCapitalize={"none"}
                    keyboardType={"default"}
                    onChangeText={(text) => {
                      setComment(text);
                    }}
                  />
                </View>
              ) : null}

              {valueLogistic == 'Otro' ? (
                <View>
                  <Typography type={"h5"} text={"Concepto"} />
                  <TextInput
                    style={styles.inputStyle}
                    autoCorrect={false}
                    placeholder="Concepto"
                    value={otherConcept}
                    autoCapitalize={"none"}
                    keyboardType={"default"}
                    onChangeText={(text) => {
                      setOtherConcept(text);
                    }}
                  />
                </View>
              ) : null}

              {valueBuy == 'Insumo' ? (
                <View>
                  <Table
                    borderStyle={{ borderWidth: 2, borderColor: "#D8D8D8" }}
                  >
                    <Row
                      data={tableHead}
                      style={styles.head}
                      textStyle={styles.textTable}
                    />
                    {tableData.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                          <Cell
                            key={cellIndex}
                            data={
                              cellIndex === 3
                                ? element(cellData, index)
                                : element2(cellData, index, cellIndex)
                            }
                            textStyle={styles.text}
                          />
                        ))}
                      </TableWrapper>
                    ))}
                  </Table>
                  <Button
                    buttonText="Agregar insumo"
                    handlePress={addRow}
                    customStyle={{
                      width: "100%",
                      marginTop: 5,
                      backgroundColor: "green",
                    }}
                  />
                </View>
              ) : null}

              {valueBuy == 'ACPM' ? (
                <View>
                  <Typography type={"h5"} text={"ACPM"} />
                  <TextInput
                    style={styles.inputStyle}
                    autoCorrect={false}
                    placeholder="Acpm"
                    value={valueACPM}
                    autoCapitalize={"none"}
                    keyboardType={"number-pad"}
                    onChangeText={(text) => {
                      setValueACPM(text.replace(/[^0-9.]/g, ""));
                    }}
                  />
                </View>
              ) : null}
              {valueBuy == 'Servicio Tercerizado' ? (
                <View>
                  <Typography type={"h5"} text={"Concepto"} />
                  <TextInput
                    style={styles.inputStyle}
                    autoCorrect={false}
                    placeholder="Concepto"
                    value={thirdService}
                    autoCapitalize={"none"}
                    keyboardType={"default"}
                    onChangeText={(text) => {
                      setThirdService(text);
                    }}
                  />
                </View>
              ) : null}
              <View style={styles.bottomButtons2}>
                <Button
                  customStyle={styles.backButton}
                  handlePress={handlePressBack}
                  buttonText="ATRAS"
                />
                <Button
                  customStyle={styles.bottomButton}
                  handlePress={handlePressSave}
                  buttonText="GUARDAR"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default LegalizeFormComponent;
