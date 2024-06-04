import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import BottomBanner from "../component/BottomBanner";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <section>
        <Header />
        <Hero />
        <BottomBanner />
        <Footer />
      </section>
    </>
  );
};

export default Home;
