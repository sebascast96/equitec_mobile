import React from "react";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Typography from "../../components/Typography";

const VisitFormComponent = (props) => {
  const { visitId } = props;
  return (
    <SafeAreaProvider>
      <View style={styles.visitformScreen}>
        <View style={styles.visitformContainer}>
          <View style={styles.paragraphSize}>
            <Typography type={"h5"} text={"VisitForm SCREEN " + visitId} />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default VisitFormComponent;
