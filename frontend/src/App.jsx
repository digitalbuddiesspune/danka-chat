import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
