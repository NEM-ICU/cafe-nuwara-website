import React, { useEffect } from "react";
import UnderConstructionComp from "../components/UnderConstructionComp";
import Footer from "../components/Footer";

const UnderConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <UnderConstructionComp />
      <Footer />
    </div>
  );
};

export default UnderConstruction;
