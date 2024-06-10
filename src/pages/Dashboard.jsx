import React from "react";
import Header from "../component/MobileView/Header";
import Body from "../component/MobileView/Body";
import Footer from "../component/MobileView/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
