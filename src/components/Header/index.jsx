import React from "react";
//import "./App.css";

const Header = () => {
  return (
    <header>
      <h1 className = "text-center">
        Employee Directory
      </h1>
      <p className = "text-center">
        Click on column headers to filer by heading or use the search box to narrow your results. 
      </p>
    </header>
  );
};

export default Header;