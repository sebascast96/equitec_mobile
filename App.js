import Router from "./src/navigation/Router";
import "react-native-gesture-handler";
import "react-native-reanimated";
import NetInfo from "@react-native-community/netinfo";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import BackgroundTasks from "./src/tasks/BackgroundTasks";

export default function App() {
  const [online, setOnline] = useState(true);
  const onNetworkStateChange = (newState) => {
    setOnline(newState.isConnected);
  };

  const initialCheck = async () =>{
    NetInfo.fetch().then((connectionInfo) => {
      setOnline(connectionInfo.isConnected);
    });
  }
    const registerApp = async()=>{
      await BackgroundTasks.register()
      .then(() => console.log("REGISTERED"))
      .catch((err) => console.log("ERROR ", err));
    }
  useEffect( () => {
    registerApp();
    initialCheck();
    NetInfo.addEventListener(onNetworkStateChange);
  }, []);
  const MINUTES_MS = 60000;

useEffect(() => {
  const interval = setInterval(() => {
    console.log('Logs every minute');
    BackgroundTasks.syncData();
  }, MINUTES_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])
  return (
    <View style={{ flex: 1 }}>
      {online ? null : (
        <View
          style={{
            height: 30,
            width: "100%",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Modo sin conexión</Text>
        </View>
      )}

      <Router />
    </View>
  );
}
