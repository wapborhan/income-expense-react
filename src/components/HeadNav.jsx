import React from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

const HeadNav = () => {
  return (
    <nav
      id="topbar"
      className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4"
    >
      <div className="sidebars-button text-dark mr-auto">
        <FaBars />
      </div>

      <h2 id="nameTitle" className="text-center text-dark">
        আয় ব্যয় হিসাব
      </h2>
      <div className="account ">
        <FaUserCircle />
      </div>
    </nav>
  );
};

export default HeadNav;
