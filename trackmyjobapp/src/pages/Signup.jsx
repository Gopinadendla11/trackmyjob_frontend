import React, { useState } from "react";
import BannerImg from "../images/banner image.png";
import { AuthServiceRegister } from "../services/AuthService";

import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onRegister = async (event) => {
    event.preventDefault();
    const response = await AuthServiceRegister(name, email, password);
    if (response.status === 200) window.location.href = "/";
    //else setErrorMsg("Error Please try again.");
  };

  return (
    <div className="h-screen w-screen bg-indigo-400 flex justify-center items-center px-24 py-16">
      <div className="w-full h-full rounded-lg bg-white drop-shadow-xl flex">
        <div className="basis-3/5 p-8 flex flex-col items-center justify-start content-center">
          <img className=" w-3/5 h-auto " src={BannerImg} alt="banner"></img>
        </div>
        <div className="basis-2/5 p-12 pt-16">
          <p className="text-[24px] font-bold mt-8">
            Welcome to TrackMyJob !!!
          </p>
          <p className="text-[14px] text-gray-400 mt-2">
            Register Your Account here.
          </p>
          <form>
            <div className="mt-8">
              <p className="text-[16px] font-bold">Name</p>
              <input
                placeholder="Enter Your Full Name"
                className="w-2/3 p-3 my-3 rounded-md border-[2px] border-solid border-primary"
                type="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </div>
            <div className="">
              <p className="text-[16px] font-bold">Email</p>
              <input
                placeholder="Enter Your Email"
                className="w-2/3 p-3 my-3 rounded-md border-[2px] border-solid border-primary"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <p className="text-[16px] font-bold">Password</p>
            <div className="relative w-2/3 my-3 ">
              <input
                className="p-3 w-full rounded-md border-[2px] border-solid border-primary"
                placeholder="Your Password"
                type={isPasswordVisible ? "text" : "password"}
                onChange={(event) => setPassword(event.target.value)}
                required
                value={password}
              ></input>
              {isPasswordVisible ? (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-3 w-6 h-6 z-10"
                  onClick={() => setIsPasswordVisible(false)}
                ></AiOutlineEyeInvisible>
              ) : (
                <AiFillEye
                  className="absolute right-2 top-3 w-6 h-6 z-10"
                  onClick={() => setIsPasswordVisible(true)}
                ></AiFillEye>
              )}
            </div>
            <input
              className="px-6 py-2 my-5 rounded-xl border-solid border-2  bg-primary text-white"
              type="submit"
              value="Signup"
              onClick={onRegister}
            ></input>
          </form>
          <a className="font-bold text-primary" href="/">
            Click Here to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
