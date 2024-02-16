import React, { useState, useEffect } from "react";
import axios from "axios";

import AddRowChild from "./AddRowChild";

const AddRow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://reqres.in/api/users?page=1");

      setData(result.data.data);
    };

    fetchData();
  }, []);
  const onChildStateChange = (newState) => {
    setData([...data, newState]);
  };
  return (
    <div className="container">
      <div className="lg:flex lg:w-[90%] mx-auto min-h-svh justify-center ">
        <div className="flex flex-col p-10 sm:w-svw sm:min-h-svh lg:w-[75%] lg:border-2 border-borderClr rounded-md">
          <h1>Parent Component</h1>
          {data.map((item) => (
            <div key={item.id} className="list-none mt-6 ">
              <li>{`First Name: ${item.first_name}`}</li>
              <li>{`Last Name: ${item.last_name}`}</li>
              <li>{`Email: ${item.email}`}</li>
            </div>
          ))}
        </div>
        <div className="flex flex-col p-10 sm:w-svw sm:min-h-svh lg:w-[25%]  lg:border-2 border-borderClr rounded-md">
          <h1 className="text-center">ChildComponent</h1>
          <AddRowChild onChildStateChange={onChildStateChange} data={data} />
        </div>
      </div>
    </div>
  );
};

export default AddRow;
