import axios from "axios";
const URL = "http://localhost:5000/api/applications";

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

export const GetApplications = async () => {
  var config = {
    headers: { "x-jwt-token": localStorage.getItem(LOCAL_STORAGE_TOKEN) },
  };
  const response = await axios
    .get(`${URL}/`, config)
    .catch((error) => error.response);

  return response.data;
};
