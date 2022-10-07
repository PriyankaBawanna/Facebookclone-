import React from "react";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <>
      <div className="header">
        <div>SEARCH AND LOGO </div>
        <div>
          <HeaderMenu />
        </div>
        <div>logo</div>
      </div>
    </>
  );
}
