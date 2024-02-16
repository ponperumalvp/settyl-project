import React, { useState } from "react";
import ChildComponent2 from "./ChildComponent2";
import { useSelector } from "react-redux";

const ParentComponent2 = () => {
  const [parentState, setParentState] = useState([]);
  // const { parentState } = useSelector((store) => {
  //   store.settyl;
  // });
  const handleChildStateChange = (newState) => {
    setParentState([...parentState, newState]);
  };

  return (
    <div className="container">
      <div className="lg:flex lg:w-[90%] mx-auto h-svh justify-center ">
        <div className="flex flex-col p-10 sm:w-svw sm:h-svh lg:w-[75%] lg:border-2 border-borderClr rounded-md">
          <h1>Parent Component</h1>
          <p>
            Parent State:
            {parentState.map((item, index) => {
              return <li key={index}>{item.task}</li>;
            })}
          </p>
        </div>

        <div className="flex flex-col p-10 sm:w-svw sm:min-h-svh lg:w-[25%]  lg:border-2 border-borderClr rounded-md">
          <h1 className="text-center mb-2">ChildComponent</h1>
          <ChildComponent2 onChildStateChange={handleChildStateChange} />
        </div>
      </div>
    </div>
  );
};

export default ParentComponent2;
