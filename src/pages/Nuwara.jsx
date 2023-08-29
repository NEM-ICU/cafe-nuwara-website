import React, { useEffect } from "react";
import NuwaraFirstArticle from "../components/NuwaraFirstArticle";
import NuwaraSecondArticle from "../components/NuwaraSecondArticle";
import NuwaraThirdArticle from "../components/NuwaraThirdArticle";
import NuwaraForthArticle from "../components/NuwaraForthArticle";
import Footer from "../components/Footer";
import NuwaraGalleryOne from "../components/NuwaraGalleryOne";
import NuwaraGalleryTwo from "../components/NuwaraGalleryTwo";

const Nuwara = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <NuwaraFirstArticle />
      <NuwaraSecondArticle />
      <NuwaraThirdArticle />
      <NuwaraForthArticle />
      <NuwaraGalleryOne />
      <NuwaraGalleryTwo />
      <Footer />
    </div>
  );
};

export default Nuwara;
