import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";
const AUTH_URL = "http://localhost:5000/api/auth";

const LOCAL_STORAGE_TOKEN = "tmj_token";

export const AuthServiceLogin = async (email, password) => {
  const response = await axios
    .post(`${AUTH_URL}/login`, { email: email, password: password })
    .catch((error) => error.response);

  if (response !== undefined && response.status === 200)
    localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.token);

  return response;
};

export const AuthServiceRegister = async (
  first_name,
  last_name,
  email,
  password
) => {
  const user = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  };
  const response = await axios
    .post(`${AUTH_URL}/register`, user)
    .catch((error) => error.response);

  if (response !== undefined && response.status === 200)
    localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.token);

  return response;
};

export const GetCurrentUser = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
  if (token && token !== undefined) {
    console.log(token);
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);

    if (!isMyTokenExpired) return myDecodedToken;
  }
};

export const Logout = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  window.location.href = "/";
};
