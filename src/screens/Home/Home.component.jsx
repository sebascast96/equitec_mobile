import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AssignedVisits from "../AssignedVisits";
import HomeRouter from "../../navigation/Tabs/HomeTab";
import SavedReports from "../SavedReports";
import Legalizations from "../Legalizations";
import { Theme } from "../../common";
import LinearGradient from "react-native-linear-gradient";
import { Image, View } from "react-native";
import styles from "./styles";
const Menu = createDrawerNavigator();

function CustomDrawerContent(props) {
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
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
}

const HomeComponent = (props) => {
  return (
    <NavigationContainer independent={true}>
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
          drawerContentContainerStyle: { backgroundColor: "pink" },
        }}
      >
        <Menu.Screen
          name="Visitas por realizar"
          options={{
            headerTitle: "",
            headerBackground: (props) => (
              <LinearGradient
                colors={[Theme.colors.navbarOrange, "#ffffff"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
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
            headerBackground: (props) => (
              <LinearGradient
                colors={[Theme.colors.navbarOrange, "#ffffff"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
            headerRight: (props) => (
              <Image
                style={styles.tinyLogo}
                source={require("../../img/logo.png")}
              />
            ),
          }}
          component={Legalizations}
        />
      </Menu.Navigator>
    </NavigationContainer>
  );
};

export default HomeComponent;
