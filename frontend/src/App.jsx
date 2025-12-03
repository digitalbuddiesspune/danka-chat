import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
