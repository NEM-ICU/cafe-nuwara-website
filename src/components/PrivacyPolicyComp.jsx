// PrivacyPolicyComp.js

import React from "react";
import "./PrivacyPolicyComp.css";

const PrivacyPolicyComp = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-box">
        <h2 className="privacy-policy-heading">Privacy Policy</h2>
      </div>
      <div className="privacy-policy-box">
        <h3 className="privacy-policy-subheading">
          At Café Nuwara, we are committed to safeguarding your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and protect the data you share
          with us.
        </h3>
      </div>
      <div className="privacy-policy-box">
        <h3 className="privacy-policy-subheading">
          Information Collection and Use
        </h3>
        <p className="privacy-policy-text">
          We may collect certain personal information when you visit our website
          or interact with us. This information includes your name, contact
          details, and preferences. We use this data to enhance your experience,
          process orders, and communicate with you effectively.
        </p>
      </div>
      <div className="privacy-policy-box">
        <h3 className="privacy-policy-subheading">Data Security</h3>
        <p className="privacy-policy-text">
          We prioritize the security of your information and employ measures to
          protect it from unauthorized access, alteration, or disclosure. Our
          website utilizes secure connections (SSL) and industry-standard
          practices to ensure the confidentiality of your data.
        </p>
      </div>
      <div className="privacy-policy-box">
        <h3 className="privacy-policy-subheading">Cookies</h3>
        <p className="privacy-policy-text">
          Café Nuwara's website may use cookies to enhance user experience and
          gather analytics. These cookies do not contain personally identifiable
          information.
        </p>
      </div>
      <div className="privacy-policy-box">
        <h3 className="privacy-policy-subheading">Third-Party Links</h3>
        <p className="privacy-policy-text">
          Our website may contain links to third-party websites. We are not
          responsible for the content or privacy practices of these sites.
        </p>
      </div>
      <div className="privacy-policy-box">
        <h3 className="privacy-policy-subheading">Your Choices</h3>
        <p className="privacy-policy-text">
          You have the right to update or delete your personal information. If
          you wish to opt out of receiving promotional communications, you can
          do so at any time.
        </p>
      </div>
      <div className="privacy-policy-box">
        <h3 className="privacy-policy-subheading">Updates to Privacy Policy</h3>
        <p className="privacy-policy-text">
          We may update our Privacy Policy to reflect changes in regulations and
          our practices. By using our website, you consent to our Privacy
          Policy.
        </p>
        <p className="privacy-policy-text">
          Café Nuwara values your privacy and strives to ensure transparency in
          how we handle your data. For any questions or concerns regarding your
          personal information, please contact us at{" "}
          <a className="privacy-policy-link" href="mailto:info@nuwara.cafe">
            info@nuwara.cafe
          </a>
          or
          <a
            className="privacy-policy-link"
            href="mailto:magiclelabs@outlook.com"
          >
            magiclelabs@outlook.com
          </a>
          (developer).
        </p>
        <p className="privacy-policy-updated">Last Updated: 2023/8/1</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyComp;
