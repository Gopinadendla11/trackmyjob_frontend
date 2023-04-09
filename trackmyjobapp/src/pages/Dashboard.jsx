import React from "react";
import { Logout } from "../services/AuthService";

const Dashboard = () => {
  return <button onClick={Logout}>Logout</button>;
};

export default Dashboard;
