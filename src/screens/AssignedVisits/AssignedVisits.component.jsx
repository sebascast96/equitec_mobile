import React from "react";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";

const AssignedVisitsComponent = (props) => {
  const { lista } = props;

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          margin: 5,
          flex: 1,
          justifyContent: "center",
          borderRadius: 10,
        }}>
        <View>
          <Text>{item.Cliente}</Text>
          <Text>{item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaProvider>
      <View style={styles.assignedvisitsScreen}>
        <View style={styles.assignedvisitsContainer}>
          <View style={styles.center}>
            <Text style={styles.titulo}>Visitas asignadas</Text>
          </View>
          <View style={styles.container}>
            <Agenda
              items={lista}
              refreshControl={null}
              showClosingKnob={true}
              refreshing={false}
              renderItem={renderItem}
              renderEmptyData={() => {
                return (
                  <View>
                    <Text>Vacio</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default AssignedVisitsComponent;
