import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import LoadingApiData from "../requirements/requirement3/LoadingApiData";
import ParentComponent from "../requirements/requirement1/ParentComponent";
import ParentComponent2 from "../requirements/requirement2/userInerface/ParentComponent2";
import AddRow from "../requirements/requirement4/AddRow";
import ArrowDropdown from "../requirements/requirement5/ArrowDropdown";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ParentComponent />} />
      <Route path="/requirement2" element={<ParentComponent2 />} />
      <Route path="/requirement3" element={<LoadingApiData />} />
      <Route path="/requirement4" element={<AddRow />} />
      <Route path="/requirement5" element={<ArrowDropdown />} />
    </Routes>
  );
};

export default Routing;
