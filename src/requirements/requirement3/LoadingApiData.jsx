import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button/Button";

const LoadingApiData = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://reqres.in/api/users?page=1");
      console.log(result);
      setData(result.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="lg:flex lg:w-[90%] mx-auto h-svh justify-center ">
        <div className="flex flex-col p-10 sm:w-svw sm:h-svh lg:w-[75%] lg:border-2 border-borderClr rounded-md">
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
      </div>
    </div>
  );
};

export default LoadingApiData;
