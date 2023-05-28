import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { GetUserData, UpdateUserData } from "../services/UserDataService";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export const Profile = () => {
  const [showsidebar, setsidebar] = React.useState(true);

  const toggleSideNav = () => {
    setsidebar((prev) => !prev);
  };
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [sev, setSev] = useState("error");
  const [name, setName] = useState("");
  const [intials, setIntials] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await GetUserData();
    if (response.status === 200) {
      const user = response.data;
      let updateName =
        user.first_name.charAt(0).toUpperCase() +
        user.first_name.slice(1) +
        " " +
        user.last_name.charAt(0).toUpperCase() +
        user.last_name.slice(1);
      setName(updateName);
      setIntials(
        user.first_name.charAt(0).toUpperCase() +
          user.last_name.charAt(0).toUpperCase()
      );

      setState({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        password: "",
      });
    }
  };

  const updateData = async (data) => {
    const response = await UpdateUserData(data);
    if (response.status === 200) {
      editMode && setEditMode(false);
      editPwd && setEditPwd(false);
      getData();
    }
  };

  const [data, setState] = useState({});
  const clearState = () => {
    getData();
    //setState((prevState) => ({ ...prevState }));
  };

  const onValueChanged = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onUpdate = () => {
    if (editMode) {
      if (data.firstName && data.lastName && data.email) {
        updateData(data);
      } else {
        setAlert(true);
        setAlertMsg("User details cannot be empty");
      }
    } else {
      if (data.password) {
        updateData(data);
      } else {
        setAlert(true);
        setAlertMsg("Password cannot be empty");
      }
    }
    //console.log(firstName, lastName, email, password);
  };
  const [editMode, setEditMode] = useState(false);
  const [editPwd, setEditPwd] = useState(false);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <button className="h-4 lg:hidden" onClick={toggleSideNav}>
        <MenuIcon></MenuIcon>
      </button>
      <div className="flex">
        <div className="h-screenhidden lg:block lg:basis-3/12">
          <Sidebar />
        </div>
        <div className="lg:hidden lg:basis-3/12">
          {showsidebar && <Sidebar />}
        </div>
        <div className="lg:basis-9/12 justify-center ">
          <div className="justify-center pt-12">
            <img
              className="rounded-full object-scale-down w-48 mx-auto "
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
          </div>
          <div className="flex w-full h-full">
            <div className="basis-1/2">
              <h1 className="text-center text-[25px]">Personal Information</h1>
              <div className="text-center ">
                <h1>Name:Sharaschandrika</h1>
                <h1>Email:ammu@gmail.com</h1>
                <h1>Password:</h1>
              </div>
            </div>
            <div className="basis-1/2">
              <h1 className="text-center text-[25px]">Documents</h1>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={alert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setAlert(false)}
      >
        <Alert
          onClose={() => setAlert(false)}
          severity={sev}
          sx={{ width: "100%" }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>

      <div className="h-screen basis-5/6 bg-purple-50 flex flex-col items-center">
        <div className="rounded-xl my-12 w-3/4 flex-col drop-shadow-xl bg-white">
          <div className="w-full py-8 flex flex-col justify-center items-center ">
            <Avatar
              sx={{
                bgcolor: deepPurple[500],
                fontSize: "80px",
                height: 182,
                width: 182,
              }}
            >
              {intials}
            </Avatar>
            <p className="py-4 text-[24px] font-bold">{name}</p>
          </div>
        </div>

        <div className=" flex justify-center rounded-xl w-3/4  drop-shadow-xl bg-white py-4">
          <div className="w-1/3 ">
            <div className="w-full flex justify-between items-center my-8">
              <p className="font-bold text-[18px] "> First Name:</p>
              <input
                className="px-4 h-12  rounded-md border-[2px] border-solid border-primary"
                name="firstName"
                type="text"
                required
                disabled={!editMode}
                value={data.firstName}
                onChange={onValueChanged}
              ></input>
            </div>
            <div className="w-full flex justify-between items-center my-8">
              <p className="font-bold text-[18px] "> Last Name:</p>
              <input
                className="px-4 h-12 rounded-md border-[2px] border-solid border-primary"
                name="lastName"
                type="text"
                required
                disabled={!editMode}
                value={data.lastName}
                onChange={onValueChanged}
              ></input>
            </div>
            <div className="w-full flex justify-between items-center my-8">
              <p className="font-bold text-[18px] ">Email:</p>
              <input
                className="px-4 h-12 rounded-md border-[2px] border-solid border-primary"
                name="email"
                type="email"
                required
                disabled={!editMode}
                value={data.email}
                onChange={onValueChanged}
              ></input>
            </div>
            {editPwd ? (
              <div className="w-full flex justify-between items-center my-8">
                <p className="font-bold text-[18px] ">Password:</p>
                <input
                  className="px-4 h-12 rounded-md border-[2px] border-solid border-primary"
                  name="password"
                  required
                  type={editPwd ? "text" : "password"}
                  disabled={!editPwd}
                  value={data.password}
                  onChange={onValueChanged}
                ></input>
              </div>
            ) : null}

            {editMode || editPwd ? (
              <div className="w-full flex justify-center items-center">
                <button
                  className="bg-primary text-white text-[18px] p-2 px-4 m-4 rounded-lg"
                  onClick={onUpdate}
                  type="submit"
                >
                  Update
                </button>
                <button
                  className="bg-primary text-white text-[18px] p-2 px-4 m-4 rounded-lg"
                  onClick={() => {
                    setEditMode(false);
                    setEditPwd(false);
                    clearState();
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center">
                <button
                  className="bg-primary text-white text-[18px] p-2 px-4 m-4 rounded-lg"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
                <button
                  className="bg-primary text-white text-[18px] p-2 px-4 m-4 rounded-lg"
                  onClick={() => {
                    setEditPwd(true);
                    // setEditMode(true);
                  }}
                >
                  Change Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
