import React from "react";
import "./SecondArticle.css";

function SecondArticle() {
  return (
    <div className="second__article container">
      <div className="second__article__wrapper">
        <div className="first__box">
          <img
            src="/public/assets/img/elephant.png"
            id="elephant_sticker"
            alt="elephant"
          />
          <h1>The Vibe</h1>
          <p>
            Experience Café Nuwara's captivating aura through our immersive Vibe
            section. Immerse yourself in the fusion of colonial grandeur and
            contemporary allure, a harmonious blend that defines our unique
            ambiance. Explore meticulously curated design elements that pay
            homage to Kandy's rich heritage, where traditional motifs coalesce
            with modern aesthetics to create an atmosphere that resonates with
            both history and modernity. Scroll through our vibrant gallery,
            where snapshots of candid moments and culinary artistry come to
            life, offering a tantalizing glimpse into the heartwarming
            camaraderie that fills Café Nuwara. This digital haven captures the
            very essence of our space, bridging the gap between online
            interaction and real-life experience. The Vibe section is your
            digital key to unlocking the captivating atmosphere that awaits you
            at Café Nuwara, where every image and detail beckons you to become
            part of our cherished narrative.
          </p>
        </div>
        <div className="second__box">
          <img src="/public/assets/img/city-view.jpg" alt="city-view" />
        </div>
      </div>
    </div>
  );
}

export default SecondArticle;
