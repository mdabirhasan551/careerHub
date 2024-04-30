import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <h1>Hello</h1>
      <Outlet />
    </div>
  );
};

export default App;
