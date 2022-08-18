import axios from "axios";
import { Constants } from "../common";

const URL = "https://equitec-app.herokuapp.com/api/v1/";

const login = async (email, pass) => {
  let url = URL + "login?email=" + email + "&password=" + pass;
  return fetchResponse(url);
};

const visitList = async (id) => {
  let url = URL + "visit_list?employee_id=" + id;
  return fetchResponse(url);
};

const fetchResponse = async (url) => {
  try {
    let request = await axios(url);
    //console.log("Request: ", request.data);
    return request.data;
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

export { login, visitList };
