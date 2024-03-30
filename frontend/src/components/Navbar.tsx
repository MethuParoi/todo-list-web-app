import React from 'react'
import home from '../assets/home.svg';
import notification from '../assets/notification.svg';
import analytics from '../assets/analytics.svg';
import userProfile from '../assets/userProfile.svg';
import tasks from "../assets/tasks.svg";
import NavItems from "./NavItems";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="py-7 pl-7 w-full min-h-[100vh] h-full bg-zinc-800 text-white">
      <NavItems props1={home} props2={"Todo"} />

      <NavItems props1={tasks} props2={"Tasks"} />

      <NavItems props1={notification} props2={"Notifications"} />

      <NavItems props1={analytics} props2={"Analytics"} />

      <div
        onClick={() => {
          //remove userId and token from local storage
          localStorage.removeItem("token");
          localStorage.removeItem("userId");

          //navigate to signin page
          navigate("/signin");
        }}
      >
        <NavItems props1={userProfile} props2={"Logout"} />
      </div>
    </div>
  );
};

export default Navbar