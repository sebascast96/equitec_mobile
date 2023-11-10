import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './styles';
import LoginComponent from './Login.component';
import { useNavigation } from '@react-navigation/native';
import { Constants } from '../../common';
import { login } from '../../client/index';
import AsyncStorage from '@react-native-async-storage/async-storage';



const invalidCredentialsModalIntialState = {
 title: Constants.language.generic.sorry,
 primaryButtonLabel: Constants.language.generic.accept,
 isModalVisible: false,
};
const LoginScreen = (props) => {
 const navigation = useNavigation();

 const [user, setUser] = useState('');
 const [password, setPassword] = useState('');
 const [showSpinner, setShowSpinner] = useState(false);
 const [invalidModal, setInvalidModal] = useState(
  invalidCredentialsModalIntialState
 );
 const [secureText, setSecureText] = useState(true);
 const [icon, setIcon] = useState('eye-off');

 useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin  () {
    setShowSpinner(true);
    const token = await AsyncStorage.getItem('token');
    const legalize = await AsyncStorage.getItem("successfulLegalization");
    if(legalize!=null){
        setShowSpinner(false)
        if(legalize){
        setInvalidModal({
            ...invalidModal,
            title: "EXITO",
            subtitle: "Se cargaron todas las legalizaciones",
            isModalVisible: true,
           });
        }
        else{
        setInvalidModal({
            ...invalidModal,
            subtitle: "Falló la carga de legalizaciones",
            isModalVisible: true,
           });
        }
    }
    else{
        if (token!=null) {
            setShowSpinner(false)
            navigation.navigate(Constants.screens.Home);
        }   
        setShowSpinner(false)
    }
  }
 const handlePressNext = async () => {
  if (user == '' || password == '') {
   setInvalidModal({
    ...invalidModal,
    subtitle: Constants.language.generic.nodata,
    isModalVisible: true,
   });
  } else {
   setShowSpinner(true);
   const res = await login(user, password);
   setShowSpinner(false);
   if (res.status == 401) {
    setInvalidModal({
     ...invalidModal,
     subtitle: Constants.language.screensText.login.rejected,
     isModalVisible: true,
    });
   } else if (res.status == 200) {
    AsyncStorage.setItem('token', res.data.token);
    
    navigation.push(Constants.screens.Home);
   }
  }
 };

 const acceptModal = async () => {
    await AsyncStorage.removeItem("successfulLegalization");
    checkLogin();
  setInvalidModal({
   ...invalidModal,
   isModalVisible: false,
  });

 };

 function onPressEye() {
  setSecureText(!secureText);
  setIcon(icon == 'eye-off' ? 'eye' : 'eye-off');
 }
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
   onPressEye={onPressEye}
   secureText={secureText}
   icon={icon}
  />
 );
};

export default LoginScreen;
