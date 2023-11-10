import * as BackgroundFetch from "expo-background-fetch"
import * as TaskManager from "expo-task-manager"
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

const TASK_NAME = "BACKGROUND_TASK";
const legalize = async (info) => {
  console.log("ENTERING LEGALIZATION")
  let url = "http://equitec-mobile-app-v2-8e504453cc53.herokuapp.com/api/v1/legalizations";
  try {
    let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  console.log("URL: ",url);
  console.log("INFO: ",JSON.stringify(info));
  let token = await AsyncStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log("STATUS: ",xhr.status);
      if(xhr.status==201){
        console.log("SUCCESSFULL LEGALIZATION");
         AsyncStorage.setItem('legalizationPending',"false")
         AsyncStorage.removeItem('legalizationInfo');
         AsyncStorage.setItem("successfulLegalization","true");
      }
      else{
        console.log("ERROR: ",xhr.response);
        console.log("ERRORTEXT: ",xhr.responseText);
        console.log("ERRORType: ",xhr.responseType);
        console.log("ERROR: ",xhr.statusText);
        AsyncStorage.setItem("successfullLegalization","false");
      }
      return xhr.response;
  }
  };
  xhr.send(info);
  } catch (error) {
    console.log(error)
  }
};
const syncData =async () => {
  const pendingLeg=await AsyncStorage.getItem('legalizationPending')
  console.log("Pending? ",pendingLeg)
      if (JSON.parse(pendingLeg)){
        console.log('PENDING LEGALIZATION IN PROGRESS')
        let info = await AsyncStorage.getItem('legalizationInfo')
        info=JSON.parse(info);
        console.log(info);
        info.forEach(element => {
          console.log("ELEMENT: ",element["_parts"])
          var formData = new FormData();
          element["_parts"].forEach((value,index) => {
              formData.append(value[0], value[1]);
          });
          legalize(formData);
        });
      }
      else{
        console.log("No legalization pending")
      }
};


TaskManager.defineTask(TASK_NAME, async () => {
  try {
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      // Sync data when online
       await syncData();
       return BackgroundFetch.BackgroundFetchResult.NewData;
    }
    else{
      console.log("NO INTERNET")
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }
  } catch (err) {
    console.log("TASK ERROR ",err)
    return BackgroundFetch.BackgroundFetchResult.Failed
  }
});

async function  register()  {
  try {
    console.log("Task registered")
    return BackgroundFetch.registerTaskAsync(TASK_NAME, {
      minimumInterval: 5, // seconds,
      stopOnTerminate:false,
      startOnBoot:true
    })
  } catch (err) {
    console.log("Task Register failed:", err)
  }
}

const unregister= ()=>{
    return BackgroundFetch.unregisterTaskAsync(TASK_NAME)
}
export default {unregister, register, syncData}