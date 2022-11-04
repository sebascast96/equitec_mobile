import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import LoginComponent from "./Login.component";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../common";
import { login } from "../../client/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const invalidCredentialsModalIntialState = {
  title: Constants.language.generic.sorry,
  subtitle: Constants.language.screensText.login.rejected,
  primaryButtonLabel: Constants.language.generic.accept,
  isModalVisible: false,
};
const LoginScreen = (props) => {
  const navigation = useNavigation();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [invalidModal, setInvalidModal] = useState(
    invalidCredentialsModalIntialState
  );

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const handlePressNext = async () => {
    if (user == "" || password == "") {
      Alert.alert(Error, "Faltan datos");
    } else {
      setShowSpinner(true);
      const res = await login(user, password);
      setShowSpinner(false);
      if (res == "") {
        setInvalidModal({
          ...invalidModal,
          isModalVisible: true,
        });
      } else {
        console.log("id", res[0].id);
        await AsyncStorage.setItem("@id", "" + res[0].id);
        await AsyncStorage.setItem("@username", res[0].username);
        await AsyncStorage.setItem("@email", res[0].email);
        navigation.push(Constants.screens.Home);
      }
    }
  };

  const acceptModal = () => {
    setInvalidModal({
      ...invalidModal,
      isModalVisible: false,
    });
  };
  return (
    <LoginComponent
      handlePressNext={handlePressNext}
      user={user}
      password={password}
      setUser={setUser}
      setPassword={setPassword}
      invalidModal={invalidModal}
      acceptModal={acceptModal}
      showSpinner={showSpinner}
    />
  );
};

export default LoginScreen;
