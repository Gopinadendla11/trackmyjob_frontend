import axios from "axios";
import { BASE_API_URL } from "../env.js";
const URL = `${BASE_API_URL}/api/applications`;

const LOCAL_STORAGE_TOKEN = "tmj_token";

export const AddNewApplication = async (applicationData) => {
  var config = {
    headers: { "x-jwt-token": localStorage.getItem(LOCAL_STORAGE_TOKEN) },
  };

  const response = await axios
    .post(`${URL}/new`, applicationData, config)
    .catch((error) => error.response);

  return response;
};
