import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from '../../common';

import NonOperationalLegalizations from '../../screens/NonOperationalLegalizations';

const StackNonOpLegalizationsTab = createNativeStackNavigator();

const LegalizationsRouter = () => {
 return (
   <StackNonOpLegalizationsTab.Navigator>
    <StackNonOpLegalizationsTab.Screen
     name={Constants.screens.NonOperationalLegalizations}
     component={NonOperationalLegalizations}
     options={{ headerShown: false }}
    />
   </StackNonOpLegalizationsTab.Navigator>
 );
};

export default LegalizationsRouter;
