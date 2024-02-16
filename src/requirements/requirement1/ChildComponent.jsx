import React, { useRef, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
const ChildComponent = ({ onChildStateChange }) => {
  const [childState, setChildState] = useState("");

  return (
    <div className="flex flex-col gap-5 text-center">
      <Input
        type="text"
        value={childState}
        onChange={(e) => setChildState(e.target.value)}
        placeholder="Enter your task"
      />
      <Button
        onClick={() => onChildStateChange({ task: childState })}
        children="change parent state"
        className="bg-btClr1 text-white"
      ></Button>
      <div className="mt-40 ">
        <Button
          children="Redux Change State "
          link="/requirement2"
          className="bg-btClr1 text-white mt-2"
        />
        <Button
          children="Get Api Data"
          link="/requirement3"
          className="bg-btClr1 text-white mt-2"
        />
        <Button
          children="Update Grid Without Api Call "
          link="/requirement4"
          className="bg-btClr1 text-white mt-2"
        />
        <Button
          children="Change Arrow Direction "
          link="/requirement5"
          className="bg-btClr1 text-white mt-2"
        />
      </div>
    </div>
  );
};

export default ChildComponent;
