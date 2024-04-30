import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
