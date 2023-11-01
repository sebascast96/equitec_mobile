import Router from "./src/navigation/Router";
import "react-native-gesture-handler";
import 'react-native-reanimated';
import NetInfo from "@react-native-community/netinfo";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";


export default function App() {
  const [online, setOnline] = useState(true);
  
  const onNetworkStateChange = (newState) => {
    setOnline(newState.isConnected);
  };

  const initialCheck = () =>
    NetInfo.fetch().then((connectionInfo) => {
      setOnline(connectionInfo.isConnected);
    });
  useEffect(() => {
    initialCheck();
    NetInfo.addEventListener(onNetworkStateChange);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {online?null:<View
        style={{
          height: 30,
          width: "100%",
          backgroundColor: "red",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <Text style={{color:'white'}}>Modo sin conexión</Text>
        
      </View>}
      
      <Router />
    </View>
  );
}
