import React from "react";
import Header from "../HeaderComp/Header";
import RightSideBar from "../RightSidebar/RightsideBar";
import CenterPage from "./CenterPage/CenterPage";
import LeftSide from "./LeftSideBar/LeftSide";

export default function HomePage() {
  return (
    <>
      <Header />

      <div>
        <div className="homePage ">
          <div className="left">
            <LeftSide />
          </div>
          <div className="center">
            <CenterPage />
          </div>
          <div className="right">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
