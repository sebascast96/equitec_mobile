import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const ButtonComponent = (props) => {
 const { buttonText, handlePress, disabled, customStyle, textStyle } = props;

 return (
  <View style={{ ...styles.container, ...customStyle }}>
   <Pressable
    style={disabled ? styles.buttonDisabled : styles.button}
    onPress={handlePress}
    disabled={disabled}>
    <Text style={[styles.text, textStyle]}>{buttonText}</Text>
   </Pressable>
  </View>
 );
};

export default ButtonComponent;
