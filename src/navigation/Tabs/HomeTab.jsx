import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from '../../common';

import VisitForm from '../../screens/VisitForm';
import AssignedVisits from '../../screens/AssignedVisits';
import LegalizeForm from '../../screens/LegalizeForm';
import VisitDetails from '../../screens/VisitDetails';
import VisitInfo from '../../screens/VisitInfo';
import LegalizationView from '../../screens/LegalizationView'

const Stack = createNativeStackNavigator();

const HomeRouter = () => {
 return (
  <NavigationContainer independent={true}>
   <Stack.Navigator>
    <Stack.Screen
     name={Constants.screens.AssignedVisits}
     component={AssignedVisits}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name={Constants.screens.VisitForm}
     component={VisitForm}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name={Constants.screens.LegalizeForm}
     component={LegalizeForm}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name={Constants.screens.VisitDetails}
     component={VisitDetails}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name={Constants.screens.VisitInfo}
     component={VisitInfo}
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

export default HomeRouter;
