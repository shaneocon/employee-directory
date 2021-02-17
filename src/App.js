import React from "react";
import "./App.css";
import Header from "./components/Header/index.jsx";
import EmployeesContainer from "./components/Container/EmployeeContainer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <EmployeesContainer />
    </>
  );
};

export default App;