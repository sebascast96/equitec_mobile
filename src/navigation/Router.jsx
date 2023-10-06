import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from '../common';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const Router = () => {
 return (
  <NavigationContainer independent={true}>
   <Stack.Navigator>
    <Stack.Screen
     name={Constants.screens.Login}
     component={LoginScreen}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name={Constants.screens.Home}
     component={HomeScreen}
     options={{ headerShown: false }}
    />
   </Stack.Navigator>
  </NavigationContainer>
 );
};

export default Router;
