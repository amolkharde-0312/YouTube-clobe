import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <Sidebar />
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
