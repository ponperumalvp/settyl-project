import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setParentState } from "../redux_thunk/redux_thunk";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
const ChildComponent2 = () => {
  const dispatch = useDispatch();
  const { parentState } = useSelector((store) => store.settyl);

  const handleChildStateChange = (e) => {
    const value = e.target.value;
    dispatch(setParentState(value));
  };

  return (
    <div className="flex flex-col gap-5 text-center">
      <Input
        type="text"
        value={parentState}
        onChange={handleChildStateChange}
        placeholder="Enter your task"
      />

      <Button children="Using Redux" className="bg-btClr1 text-white"></Button>
      <div className="mt-40 ">
        <Button
          children=" Change State "
          link="/"
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

export default ChildComponent2;
