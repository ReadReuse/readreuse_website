import React from "react";
import Navbar from "../common/navbar/navbar";
import Feature from "./components/feature/feature";
import Footer from "./components/footer/footer";
import HeroBanner from "./components/heroBanner/heroBanner";
import { HomeStyled } from "./homeStyle";

const Home = () => {
  return (
    <HomeStyled>
      <Navbar />
      <HeroBanner />
      <div className="text-wrapper">
        {/* ReadReuse is platform where college students can sell <br /> their old book and college related stuff directly to others. */}
        Readreuse app, your key to last-minute mastery!
        <br /> dive into quick notes and previous year question paper
      </div>
      <Feature />
      <Footer />
    </HomeStyled>
  );
};

export default Home;
