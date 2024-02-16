import React, { useState } from "react";
import "../../App.css";
import Button from "../../components/button/Button";

const ArrowDropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="container">
      <div className="lg:flex lg:w-[90%] mx-auto h-svh justify-center ">
        <div className="flex flex-col p-10 sm:w-svw sm:h-svh lg:w-[75%] lg:border-2 border-borderClr rounded-md">
          <h1>Parent Component</h1>
          <div className="dropdown">
            <button
              className={`dropdown-toggle ${isActive ? "active" : ""}`}
              onClick={handleToggle}
            >
              Dropdown
              <span className="arrow"></span>
            </button>
            {/* <div className={`dropdown-menu ${isActive ? "active" : ""}`}></div> */}
          </div>
        </div>
        <div className="flex flex-col p-10 sm:w-svw sm:min-h-svh lg:w-[25%]  lg:border-2 border-borderClr rounded-md">
          <h1 className="text-center">ChildComponent</h1>
          <div className="mt-32">
            <Button
              children="Change Parent State"
              link="/"
              className="bg-btClr1 text-white"
            />
            <Button
              children="Redux Change State "
              link="/requirement2"
              className="bg-btClr1 text-white mt-2"
            />
            <Button
              children="Get Api Data "
              link="/requirement3"
              className="bg-btClr1 text-white mt-2"
            />
            <Button
              children="Update Grid Without Api Call "
              link="/requirement4"
              className="bg-btClr1 text-white mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowDropdown;
