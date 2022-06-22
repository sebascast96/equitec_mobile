import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Button from '../../components/Button'
import { Constants } from '../../common';

const LoginComponent = props => {
  const {handlePressNext} = props;
  return (
    <SafeAreaProvider>
      <View style={styles.loginScreen}>
        <View style={styles.loginContainer}>
            <Text>Login</Text>
            <Button 
					    handlePress={handlePressNext}
              buttonText={Constants.language.generic.next}
            />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default LoginComponent;
