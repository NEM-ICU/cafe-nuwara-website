import React from "react";
import "./ThirdArticle.css";

const ThirdArticle = () => {
  return (
    <div className="third__article container">
      <div className="third__article__wrapper">
        <div className="first__box">
          <img src="/assets/img/kandy_perehera.jpg" alt="city-view" />
        </div>
        <div className="second__box">
          <img src="/assets/svg/flower1.svg" alt="flower" />
          <h1>Heritage</h1>
          <p>
            Café Nuwara embodies the essence of Kandyan heritage, seamlessly
            weaving the city's rich legacy into every experience. Our ambiance
            echoes the elegance of Kandyan royalty, while our menu pays homage
            to centuries-old recipes, infusing modern gastronomy with historical
            flavors. More than a café, it's a cultural ode, where each cup of
            Ceylon tea and every dish served carries the spirit of Kandy. With
            every visit, you're not just savoring culinary delights; you're
            immersing yourself in the living heritage of a city that thrives
            within Café Nuwara's walls.
          </p>
          <button className="o-btn--decorative">Explore the Heritage</button>
        </div>
      </div>
    </div>
  );
};

export default ThirdArticle;
