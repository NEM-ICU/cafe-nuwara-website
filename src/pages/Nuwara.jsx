import React from "react";
import NuwaraFirstArticle from "../components/NuwaraFirstArticle";
import NuwaraSecondArticle from "../components/NuwaraSecondArticle";
import NuwaraThirdArticle from "../components/NuwaraThirdArticle";
import NuwaraForthArticle from "../components/NuwaraForthArticle";
import Footer from "../components/Footer";
import NuwaraGalleryOne from "../components/NuwaraGalleryOne";
import NuwaraGalleryTwo from "../components/NuwaraGalleryTwo";

const Nuwara = () => {
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
