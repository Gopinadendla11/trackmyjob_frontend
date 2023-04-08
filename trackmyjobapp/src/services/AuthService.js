import axios from "axios";
const AUTH_URL = "http://localhost:5000/api/auth";

export const AuthServiceLogin = (email, password) => {
  axios
    .post(`${AUTH_URL}/login`, { email: email, password: password })
    .then((res) => {
      console.log(res);
    })
    .catch(console.error());
};

export const AuthServiceRegister = (name, email, password) => {
  const user = { name: name, email: email, password: password };
  axios
    .post(`${AUTH_URL}/register`, user)
    .then((res) => {
      console.log(res);
    })
    .catch(console.error());
};
