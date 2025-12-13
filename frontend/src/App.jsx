import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
