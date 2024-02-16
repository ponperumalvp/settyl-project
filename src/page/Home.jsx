import React from "react";
import ParentComponent from "../requirements/requirement1/ParentComponent";
import ParentComponent2 from "../requirements/requirement2/userInerface/ParentComponent2";
const Home = () => {
  return (
    <div>
      <ParentComponent />
      <ParentComponent2 />
    </div>
  );
};

export default Home;
