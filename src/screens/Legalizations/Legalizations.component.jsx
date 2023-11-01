import React from "react";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Theme } from "../../common";
import { Card, Button } from "react-native-paper";
import Typography from "../../components/Typography";

const LegalizationsComponent = (props) => {
  const { legalizations, tableHead, onPressIcon, refreshing, onRefresh } =
    props;
  const element = (data) => (
    <Pressable
      onPress={() => onPressIcon(data)}
      style={{ alignItems: "center" }}
    >
      {data[3] == "created" ? (
        <Entypo name="pencil" size={40} color={Theme.colors.mainOrange} />
      ) : (
        <Ionicons name={"eye"} color={Theme.colors.mainOrange} size={40} />
      )}
    </Pressable>
  );
  return (
    <SafeAreaProvider>
      <ScrollView
        style={styles.legalizationsScreen}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.legalizationsContainer}>
          <View style={styles.paragraphSize}>
            <Typography
              type={"h5"}
              style={styles.titulo}
              text={"Mis legalizaciones"}
            />

            {legalizations.map((data, i) => {
              return (
                <Card
                  mode="elevated"
                  elevation={5}
                  style={{ marginVertical: 10, backgroundColor: "white" }}
                  onPress={()=>onPressIcon(data)}
                  key={i}
                >
                  <Card.Title
                    title={"Cliente: " + data[5]}
                    titleStyle={{ color: Theme.colors.mainOrange }}
                    subtitle={"Fecha: " + data[1]}
                  />
                  <Card.Content>
                    <View style={{ flexDirection: "row" }}>
                      <Typography
                        type={"h5"}
                        style={{ width: "55%" }}
                        text={"Tipo de legalización: " + data[0]}
                      />
                      <Typography
                        type={"h5"}
                        style={{ width: "45%" }}
                        text={"Concepto: " + data[2]}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        type={"h5"}
                        style={{ width: "55%" }}
                        text={"Orden de Trabajo: " + data[6]}
                      />
                      <Typography
                        type={"h5"}
                        style={{ width: "45%" }}
                        text={"Estado: " + data[3]}
                      />
                    </View>
                    
                    <Typography
                        type={"h5"}
                        style={{fontWeight:'bold', marginTop:5 }}
                        color={Theme.colors.mainOrange}
                        text={"Presiona para "+(data[3]=="created"?"Editar":"Ver")}
                      />
                  </Card.Content>
                </Card>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default LegalizationsComponent;
