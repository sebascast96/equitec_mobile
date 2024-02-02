import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from '../../common';

import OperationalLegalizations from '../../screens/OperationalLegalizations';
import LegalizeForm from '../../screens/LegalizeForm';

const StackLegalizationsTab = createNativeStackNavigator();

const LegalizationsRouter = () => {
 return (
   <StackLegalizationsTab.Navigator>
    <StackLegalizationsTab.Screen
     name={Constants.screens.OperationalLegalizations}
     component={OperationalLegalizations}
     options={{ headerShown: false }}
    />
    <StackLegalizationsTab.Screen
     name={Constants.screens.LegalizeForm}
     component={LegalizeForm}
     options={{ headerShown: false }}
    />
   </StackLegalizationsTab.Navigator>
 );
};

export default LegalizationsRouter;
