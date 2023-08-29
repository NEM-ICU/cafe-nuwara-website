import React, { useEffect } from "react";

import FirstArticle from "../components/FirstArticle";
import NavigationBoxes from "../components/NavigationBoxes";
import SecondArticle from "../components/SecondArticle";
import ThirdArticle from "../components/ThirdArticle";
import OurOfferings from "../components/OurOfferings";
import Footer from "../components/Footer";
import WindowSection from "../components/WindowSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
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
