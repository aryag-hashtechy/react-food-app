import React from "react";
import Hero from "../component/Hero";
import BodySection from "../component/BodySection";
import Header from "../component/Header";
import BottomBanner from "../component/BottomBanner";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <section>
        <Header />
        <Hero />
        <BodySection />
        <BottomBanner />
        <Footer />
      </section>
    </>
  );
};

export default Home;
