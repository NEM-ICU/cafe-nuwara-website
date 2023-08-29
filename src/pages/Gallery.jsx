import React, { useEffect } from "react";
import PinterestLayout from "../components/PinterestLayout";
import Footer from "../components/Footer";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <PinterestLayout />
    </>
  );
};

export default Gallery;
