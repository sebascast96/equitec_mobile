import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import VisitFormComponent from "./VisitForm.component";

const VisitFormScreen = (props) => {
  const { visitId } = props.route.params;
  return <VisitFormComponent visitId={visitId} />;
};

export default VisitFormScreen;
