import React from "react";

const Input = ({ label, type, placeholder, onChange, name, className }) => {
  return (
    <div className=" w-[100%] ">
      <label>{label}</label>
      <div>
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          onChange={onChange}
          className={`"w-[100%] h-10 px-3 py-1 focus:outline-none border-2 border-borderClr rounded-[6px] " + ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
