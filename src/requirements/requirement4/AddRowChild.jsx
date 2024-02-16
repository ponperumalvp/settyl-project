import React, { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const AddRowChild = ({ onChildStateChange, data }) => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-5 text-center">
      <div className="flex flex-col gap-2 mt-4 text-center">
        <Input
          type="text"
          value={first_name}
          onChange={(e) => setFirst_Name(e.target.value)}
          placeholder="Enter your First Name"
        />
        <Input
          type="text"
          value={last_name}
          onChange={(e) => setLast_Name(e.target.value)}
          placeholder="Enter your Last Name"
        />
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <Button
        onClick={() =>
          onChildStateChange({
            id: data.length + 1,
            first_name: first_name,
            last_name: last_name,
            email: email,
          })
        }
        children="Add Your Data"
        className="bg-btClr1 text-white"
      ></Button>
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
          children="Get Api data "
          link="/requirement3"
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

export default AddRowChild;
