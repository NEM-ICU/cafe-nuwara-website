import React from "react";

import FirstArticle from "../components/FirstArticle";
import NavigationBoxes from "../components/NavigationBoxes";
import SecondArticle from "../components/SecondArticle";
import ThirdArticle from "../components/ThirdArticle";
import OurOfferings from "../components/OurOfferings";
import Footer from "../components/Footer";
import WindowSection from "../components/WindowSection";

const Home = () => {
  return (
    <div className="home">
      <FirstArticle />
      <NavigationBoxes />
      <SecondArticle />
      <ThirdArticle />
      <OurOfferings />
      <WindowSection />
      <Footer />
    </div>
  );
};

export default Home;
