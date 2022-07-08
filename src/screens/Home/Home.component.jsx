import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AssignedVisits from "../AssignedVisits";
import SavedReports from "../SavedReports";

const Menu = createDrawerNavigator();

const HomeComponent = (props) => {
  return (
    <NavigationContainer independent={true}>
      <Menu.Navigator
        screenOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}>
        <Menu.Screen
          name="Visitas por realizar"
          options={{
            headerTitle: "Nuevo titulo",
          }}
          component={AssignedVisits}
        />
        <Menu.Screen name="Informes guardados" component={SavedReports} />
      </Menu.Navigator>
    </NavigationContainer>
  );
};

export default HomeComponent;
