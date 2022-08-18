import React from "react";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput } from "react-native";
import Typography from "../../components/Typography";
import { Theme } from "../../common";
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
const data = ["Todo", "Opcion", "Opcion", "Opcion", "Opcion"];

const AssignedVisitsComponent = (props) => {
  return (
    <SafeAreaProvider>
      <View style={styles.assignedvisitsScreen}>
        <View style={styles.assignedvisitsContainer}>
          <View style={styles.paragraphSize}>
            <View style={styles.center}>
              <Text style={styles.titulo}>Visitas asignadas</Text>
            </View>
            <View style={styles.left}>
              <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />
              <Ionicons
                style={styles.iconrefresh}
                name='refresh'
                color='#000'
                size={30}
              />
            </View>
            <Text style={styles.textbusqueda}>Busqueda: </Text>
            <View style={styles.busquedaContaienr}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
              />
              <Ionicons
                style={styles.icon}
                name='search'
                color='#000'
                size={30}
              />
            </View>
            {/* Carta de visita */}
            <Text style={styles.fechacard}>2 Mayo </Text>
            <View style={styles.card}>
              <Text style={styles.titulocard}>Mantenimiento tipo 1</Text>
              <Text style={styles.textcard}>Información detallada del mantenimiento</Text>
              <Text style={styles.textfecha}>03/04/22 - 22:30 a 00:32</Text>
              <View style={styles.left}>
                <Ionicons
                  style={styles.iconrefresh}
                  name='add'
                  color='#000'
                  size={30}
                />  
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default AssignedVisitsComponent;
