import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from '../../common';

import Legalizations from '../../screens/Legalizations';
import LegalizationView from '../../screens/LegalizationView'

const Stack = createNativeStackNavigator();

const LegalizationRouter = () => {
 return (
  <NavigationContainer independent={true}>
   <Stack.Navigator>
    <Stack.Screen
     name={Constants.screens.Legalizations}
     component={Legalizations}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name={Constants.screens.LegalizationView}
     component={LegalizationView}
     options={{ headerShown: false }}
    />
   </Stack.Navigator>
  </NavigationContainer>
 );
};

export default LegalizationRouter;
