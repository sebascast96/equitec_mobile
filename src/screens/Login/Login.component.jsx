import React from "react";
import styles from "./styles";
import { View, Text, TextInput, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { Constants } from "../../common";
import { Ionicons } from '@expo/vector-icons';


const LoginComponent = (props) => {
  const { handlePressNext } = props;
  return (
    <SafeAreaProvider>
      <View style={styles.loginScreen}>
        <View style={styles.loginContainer}>
          <View style={styles.center}>
            <Image style={styles.tinyLogo} source={require('../../img/logo.png')} />
            <Text style={styles.headertittle}>HOLA!</Text>
            <Text style={styles.headersubtittle}>Inicie sesión para continuar</Text>
          </View>
          <Text style={styles.text}>USUARIO</Text>
          <TextInput
            style={styles.inputUserStyle}
            autoCorrect={false}
            placeholder="Username"
          />
          <Text style={styles.text}>CONTRASEÑA</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              secureTextEntry
              placeholder="Password"
            />
            <Ionicons
              style={styles.icon}
              name='eye-off'
              color='#000'
              size={30}
            />
          </View>
          <View style={styles.center}>
            <Button
              handlePress={handlePressNext}
              buttonText={Constants.language.generic.login}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default LoginComponent;
