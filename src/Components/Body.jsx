import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
       <Header />
      <div className="grid grid-flow-col mx-4 my-4  ">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
