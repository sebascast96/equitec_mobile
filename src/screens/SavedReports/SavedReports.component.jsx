import React from "react";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Typography from "../../components/Typography";
import { Theme } from "../../common";

const SavedReportsComponent = (props) => {
  return (
    <SafeAreaProvider>
      <View style={styles.savedreportsScreen}>
        <View style={styles.savedreportsContainer}>
          <View style={styles.paragraphSize}>
            <Typography
              type={"h5"}
              text={"Reportes Guardados"}
              style={{ color: Theme.colors.ash1 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default SavedReportsComponent;
