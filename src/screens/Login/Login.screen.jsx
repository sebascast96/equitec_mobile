import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import LoginComponent from "./Login.component";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../common";
import { login } from "../../client/index";
const LoginScreen = (props) => {
  const navigation = useNavigation();

  const[user, setUser]=useState("");
  const[password, setPassword]=useState("");

  const handlePressNext = async () => {
    console.log(user,password);
    const res = await login(user, password);
    console.log(res);
    if (res.data == "") {
      console.log("nel");
    } else {
      navigation.navigate(Constants.screens.Home);
    }
  };
  return <LoginComponent handlePressNext={handlePressNext} user={user} password={password}/>;
};

export default LoginScreen;
