import React, { useEffect } from "react";
import PrivacyPolicyComp from "../components/PrivacyPolicyComp";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <PrivacyPolicyComp />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
