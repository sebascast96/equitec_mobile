import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from '../../common';

import Legalizations from '../../screens/Legalizations';
import LegalizationView from '../../screens/LegalizationView'

const StackLegalizationTab = createNativeStackNavigator();

const LegalizationRouter = () => {
 return (
   <StackLegalizationTab.Navigator>
    <StackLegalizationTab.Screen
     name={Constants.screens.Legalizations}
     component={Legalizations}
     options={{ headerShown: false }}
    />
    <StackLegalizationTab.Screen
     name={Constants.screens.LegalizationView}
     component={LegalizationView}
     options={{ headerShown: false }}
    />
   </StackLegalizationTab.Navigator>
 );
};

export default LegalizationRouter;
