import React, { useEffect } from "react";
import ContactUsComp from "../components/ContactUs";
import Footer from "../components/Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <ContactUsComp />
      <Footer />
    </>
  );
};

export default ContactUs;
