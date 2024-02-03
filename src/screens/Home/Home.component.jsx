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
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LegalizationRouter from "../../navigation/Tabs/LegalizationRouter";
import LegalizationsRouter from "../../navigation/Tabs/LegalizationsRouter";
import NonOpLegalizationsRouter from "../../navigation/Tabs/NonOpLegalizationsRouter";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Menu = createDrawerNavigator();
async function logout(navigation) {
  await AsyncStorage.removeItem("token");
  navigation.navigate(Constants.screens.Login);
}
async function goToNon(navigation) {
  console.log(navigation.navigate("No operacional"))
}

async function goTo(navigation) {
  console.log(navigation.navigate("Operacional"))
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
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
        <DrawerItem
            label="Legalizar"
            icon={({ focused, color, size }) =>   
            <Ionicons
            style={{
              alignSelf: "center",
              position: "absolute",
              right: 5,
            }}
            name={collapsed?"caret-down-outline":"caret-up"}
            color={"grey"}
            size={30}
          /> }
            labelStyle={{ fontSize: 20 }}
            style={{
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderRadius: 0,
              marginBottom:0
            }}
            onPress={toggle}
          />
        <Collapsible collapsed={collapsed} align="center">
          <DrawerItem
            label="Operacional"
            labelStyle={{ fontSize: 20 }}
            style={{
              borderBottomWidth: 1,
              marginTop:0,
              borderRadius: 0,
            }}
            onPress={()=>goTo(props.navigation)}
          />
          <DrawerItem
            label="No Operacional"
            labelStyle={{ fontSize: 20 }}
            style={{
              marginTop:0,
              borderBottomWidth: 1,
              borderRadius: 0,
            }}
            onPress={()=>goToNon(props.navigation)}
          />
        </Collapsible>
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
      drawerContent={(props) =>  <CustomDrawerContent {...props} />}
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
        initialParams={logout}
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
      <Menu.Group displayName="Legalizar">
        <Menu.Screen
          name="Operacional"
          options={{
            drawerItemStyle: {display:"none"},
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
          component={LegalizationsRouter}
        />
        <Menu.Screen
          name="No operacional"
          options={{
            drawerItemStyle: { display:"none"},
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
          component={NonOpLegalizationsRouter}
        />
      </Menu.Group>
    </Menu.Navigator>
  );
};

export default HomeComponent;
