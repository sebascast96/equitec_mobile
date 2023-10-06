import React, { useRef } from 'react';
import styles from './styles';
import {
 View,
 Text,
 TextInput,
 Image,
 Pressable,
 KeyboardAvoidingView,
 ScrollView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { Constants } from '../../common';
import { Ionicons } from '@expo/vector-icons';
import AlertComponent from '../../components/Alerts';
import LoadingSpinner from '../../components/Spinner/Spinner.component';
import { delay } from '../../helper/helper';

const LoginComponent = (props) => {
 const {
  handlePressNext,
  user,
  password,
  setUser,
  setPassword,
  invalidModal,
  acceptModal,
  showSpinner,
  onPressEye,
  secureText,
  icon,
 } = props;
 const scrollViewRef = useRef(ScrollView);
 function scroll() {
  scrollViewRef.current?.scrollToEnd();
 }
 return (
  <SafeAreaProvider>
   <AlertComponent
    modalParams={invalidModal}
    handlePressPrimary={acceptModal}
   />

   <LoadingSpinner showSpinner={showSpinner} animation={'none'} />
   <ScrollView ref={scrollViewRef}>
    <View style={styles.loginScreen}>
     <View style={styles.loginContainer}>
      <View style={styles.center}>
       <Image style={styles.tinyLogo} source={require('../../img/logo.png')} />
       <Text style={styles.headersubtittle}>Inicie sesión para continuar</Text>
      </View>

      <Text style={styles.text}>USUARIO</Text>
      <TextInput
       style={styles.inputUserStyle}
       autoCorrect={false}
       placeholder='Usuario'
       value={user}
       autoCapitalize={'none'}
       keyboardType={'email-address'}
       onChangeText={(text) => {
        setUser(text);
       }}
       onPressIn={() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
       }}
      />
      <Text style={styles.text}>CONTRASEÑA</Text>

      <View style={styles.passwordContainer}>
       <TextInput
        style={styles.inputStyle}
        secureTextEntry={secureText}
        value={password}
        onChangeText={(text) => {
         setPassword(text);
        }}
        onPressIn={() => {
         scrollViewRef.current?.scrollToEnd({ animated: true });
        }}
        placeholder='Contraseña'
        onSubmitEditing={handlePressNext}
       />
       <Pressable onPress={onPressEye}>
        <Ionicons style={styles.icon} name={icon} color='#000' size={30} />
       </Pressable>
      </View>
      <View style={styles.center}>
       <Button
        handlePress={handlePressNext}
        buttonText={Constants.language.generic.login}
       />
      </View>
     </View>
    </View>
   </ScrollView>
  </SafeAreaProvider>
 );
};

export default LoginComponent;
