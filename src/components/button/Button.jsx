import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onClick, children, link, className }) => {
  return (
    <div className=" w-[100%] ">
      <Link to={link}>
        <button
          onClick={onClick}
          className={` "text-white rounded-[6px]  w-[100%] h-10 text-center  font-extralight tracking-wider "  + ${className}`}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
