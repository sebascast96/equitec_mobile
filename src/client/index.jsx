import axios from "axios";
import { Constants } from "../common";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = "http://equitec-mobile-app-v2-8e504453cc53.herokuapp.com/api/v1/";

const login = async (email, pass) => {
  let url = URL + "auth/login?email=" + email + "&password=" + pass;
  let config = {
    headers: {},
  };
  let data = {};
  return fetchResponsePost(url, data, config);
};

const visitList = async () => {
  let url = URL + "events/technician_events";
  let token = await AsyncStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  return fetchResponse(url, config);
};


const legalizationList = async () => {
  let url = URL + "legalizations";
  let token = await AsyncStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  return fetchResponse(url, config);
};

const legalizationDetail = async (id) => {
  let url = URL + "legalizations/"+id;
  let token = await AsyncStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  return fetchResponse(url, config);
};


const customerList = async () => {
  let url = URL + "legalizations/customers";
  let token = await AsyncStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  return fetchResponse(url, config);
};


const authorizers = async () => {
  let url = URL + "legalizations/authorizers";
  let token = await AsyncStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  return fetchResponse(url, config);
};


const fetchResponse = async (url, config) => {
  try {
    let request = await axios(url, config);
    // console.log("Request: ", request);
    return request;
  } catch (err) {
    //If error happened, respond back with error status and body
    if (err.response) {
      console.log("Error in client: ", err);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      return err.response;
    } else if (err.request) {
      console.log(err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error ", err.message);
    }
    console.log(err.toJSON());
  }
};

const fetchResponsePost = async (url, data, config) => {
  try {
    let request = await axios({
      method: "post",
      url: url,
      withCredentials: false,
      body: data,
      headers: config,
    });
    return request;
  } catch (err) {
    //If error happened, respond back with error status and body
    if (err.response) {
      console.log("Error in client: ", err);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      return err.response;
    } else if (err.request) {
      console.log(err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error ", err.message);
    }
    console.log(err.toJSON());
  }
};

export { login, visitList, legalizationList, legalizationDetail, customerList, authorizers };
