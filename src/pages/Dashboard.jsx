import React from "react";
import Header from "../component/MobileView/Header";
import Body from "../component/MobileView/Body";
import Footer from "../component/MobileView/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard__container">
        <Header />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
