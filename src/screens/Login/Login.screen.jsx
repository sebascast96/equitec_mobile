import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import LoginComponent from "./Login.component";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../common";
import { login } from "../../client/index";
const LoginScreen = (props) => {
  const navigation = useNavigation();

  const handlePressNext = async () => {
    const res = await login("tecnico.prueba@equitec.com.co", "12345670");
    console.log(res);
    if (res.data == "") {
      console.log("nel");
    } else {
      navigation.navigate(Constants.screens.Home);
    }
  };
  return <LoginComponent handlePressNext={handlePressNext} />;
};

export default LoginScreen;
