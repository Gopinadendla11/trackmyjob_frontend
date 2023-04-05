import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  // const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <div className="App font-Poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" exact Component={Dashboard}></Route>
          <Route path="/login" exact Component={Login}></Route>
          <Route path="/signup" exact Component={Signup}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
