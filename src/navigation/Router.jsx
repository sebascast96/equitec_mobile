import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Constants } from "../common";

import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";

const Stack = createNativeStackNavigator();

const Router = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={Constants.screens.Login}
					component={LoginScreen}
				/>
				<Stack.Screen
					name={Constants.screens.Home}
					component={HomeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
