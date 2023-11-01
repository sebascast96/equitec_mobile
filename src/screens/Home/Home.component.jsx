import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import HomeRouter from "../../navigation/Tabs/HomeTab";
import { Constants, Theme } from "../../common";
import LinearGradient from "react-native-linear-gradient";
import { Image, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LegalizationRouter from "../../navigation/Tabs/LegalizationRouter";

const Menu = createDrawerNavigator();
async function logout(navigation) {
  AsyncStorage.removeItem('token');
   navigation.navigate(Constants.screens.Login);
}
function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        height: "100%",
        paddingBottom: 100,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image style={styles.bigLogo} source={require("../../img/logo.png")} />
        <DrawerItemList {...props} />
      </View>
      <DrawerItem
        label="Cerrar sesión"
        labelStyle={{ fontSize: 20 }}
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderRadius: 0,
        }}
        onPress={() => logout(navigation)}
      />
    </DrawerContentScrollView>
  );
}

const HomeComponent = (props) => {
  return (
      <Menu.Navigator
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveBackgroundColor: "white",
          drawerActiveTintColor: Theme.colors.mainOrange,
          drawerLabelStyle: { fontSize: 20 },
          drawerItemStyle: {
            borderBottomWidth: 0,
            borderTopWidth: 1,
            borderRadius: 0,
          },
        }}
      >
        <Menu.Screen
          name="Visitas por realizar"
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: Theme.colors.navbarOrange,
            },
            headerRight: (props) => (
              <Image
                style={styles.tinyLogo}
                source={require("../../img/logo.png")}
              />
            ),
          }}
          component={HomeRouter}
        />

        <Menu.Screen
          name="Legalizaciones"
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: Theme.colors.navbarOrange,
            },
            headerRight: (props) => (
              <Image
                style={styles.tinyLogo}
                source={require("../../img/logo.png")}
              />
            ),
          }}
          component={LegalizationRouter}
        />
      </Menu.Navigator>
  );
};

export default HomeComponent;
