import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import RequireAuth from "./pages/RequireAuth";

const App = () => {
  return (
    <div className="App font-Poppins">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" exact Component={Login}></Route>
          <Route path="/signup" exact Component={Signup}></Route>

          <Route path="/404" exact Component={ErrorPage}></Route>
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
