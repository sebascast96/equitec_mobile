import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from '../common';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const StackRouter = createNativeStackNavigator();

const Router = () => {
    const [isSignedIn, setIsSignedIn]=useState(true);
    useEffect(() => {
        checkLogin();
      }, []);
    const checkLogin=async () =>{
        const token = await AsyncStorage.getItem("token");
        if (token != null) {
            setIsSignedIn(true);
        }
    }
 return (
  <NavigationContainer independent={true}>
   <StackRouter.Navigator>
  <StackRouter.Screen
     name={Constants.screens.Home}
     component={HomeScreen}
     options={{ headerShown: false }}
    />
    
  <StackRouter.Screen
     name={Constants.screens.Login}
     component={LoginScreen}
     options={{ headerShown: false }}
    />

   </StackRouter.Navigator>
  </NavigationContainer>
 );
};

export default Router;
