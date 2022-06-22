import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import LoginComponent from './Login.component';
import { useNavigation } from "@react-navigation/native";
import { Constants } from '../../common';
const LoginScreen = props => {
	const navigation = useNavigation();

	const handlePressNext = () => {
		navigation.navigate(Constants.screens.Home);
	};
  return (
    <LoginComponent handlePressNext={handlePressNext}/>
  );
};

export default LoginScreen;
