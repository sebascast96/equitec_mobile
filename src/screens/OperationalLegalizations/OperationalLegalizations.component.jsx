import React from "react";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Typography from "../../components/Typography";
import { Theme } from "../../common/index";
import DropDownPicker from "react-native-dropdown-picker";
import LoadingSpinner from "../../components/Spinner/Spinner.component";
import Button from "../../components/Button";

const OperationalLegalizationsComponent = (props) => {
  const {
    showSpinner,
    openCust,
    valueCust,
    itemsCust,
    setOpenCust,
    setValueCust,
    setItemsCust,
    openWO,
    valueWO,
    itemsWO,
    setOpenWO,
    setValueWO,
    setItemsWO,
    openEvents,
    valueEvents,
    itemsEvents,
    setOpenEvents,
    setValueEvents,
    setItemsEvents,
    handlePressSave,
    buttonDisabled,
  } = props;
  return (
    <SafeAreaProvider>
      <View style={styles.operationallegalizationsScreen}>
        <LoadingSpinner showSpinner={showSpinner} animation={"none"} />
        <View style={styles.operationallegalizationsContainer}>
          <Typography
            type={"h5"}
            style={styles.titulo}
            text={"Legalización Operacional"}
          />
          <View>
            <Typography type={"h5"} text={"Cliente"} />
            <DropDownPicker
              listMode="SCROLLVIEW"
              placeholder="Cliente"
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
                zIndex: 10,
              }}
              open={openCust}
              value={valueCust}
              items={itemsCust}
              setOpen={setOpenCust}
              setValue={setValueCust}
              setItems={setItemsCust}
            />
          </View>
          <View>
            <Typography type={"h5"} text={"Orden de trabajo"} />
            <DropDownPicker
              listMode="SCROLLVIEW"
              placeholder="Orden de trabajo"
              placeholderStyle={{
                color: "grey",
                fontWeight: "bold",
              }}
              containerStyle={{}}
              translation={{
                NOTHING_TO_SHOW:"Elija un cliente"
              }}
              
              style={{
                height: 45,
                marginBottom: 15,
                borderRadius: 50,
                borderWidth: 0,
                zIndex: 9,
              }}
              open={openWO}
              value={valueWO}
              items={itemsWO}
              setOpen={setOpenWO}
              setValue={setValueWO}
              setItems={setItemsWO}
            />
          </View>
          <View>
            <Typography type={"h5"} text={"Evento"} />
            <DropDownPicker
              listMode="SCROLLVIEW"
              placeholder="Evento"
              placeholderStyle={{
                color: "grey",
                fontWeight: "bold",
              }}
              translation={{
                NOTHING_TO_SHOW:"Elija un evento"
              }}
              containerStyle={{}}
              style={{
                height: 45,
                marginBottom: 15,
                borderRadius: 50,
                borderWidth: 0,
                zIndex: 9,
              }}
              open={openEvents}
              value={valueEvents}
              items={itemsEvents}
              setOpen={setOpenEvents}
              setValue={setValueEvents}
              setItems={setItemsEvents}
            />
          </View>
        </View>
        <Button
          customStyle={styles.bottomButton}
          handlePress={handlePressSave}
          disabled={buttonDisabled}
          buttonText="GUARDAR"
        />
      </View>
    </SafeAreaProvider>
  );
};

export default OperationalLegalizationsComponent;
