import React from "react";
import "./FirstArticle.css";

function FirstArticle() {
  return (
    <section>
      <div className="article__wrapper container">
        <img src="/assets/img/banner-ad.png" alt="ad" />
        <div className="title">
          <h1>A Luxary Colonial Cafe with Timeless Charm</h1>
        </div>
        <div className="article__main">
          <div className="first__paragraph">
            <img src="/assets/img/king.jpg" alt="king" />
            <div className="main__paragraph__wrapper">
              <p className="article__one__p__one">
                Nestled in the heart of Kandy, Sri Lanka, Café Nuwara invites
                you to embark on a culinary journey that marries tradition with
                innovation. Steeped in the enchanting allure of colonial charm,
                our café offers a unique experience where history and flavor
                intertwine.
              </p>

              <p className="article__one__p__two">
                Step into Café Nuwara and be transported to an era of elegance
                and refinement. Our colonial-inspired ambiance pays homage to
                Kandy's regal legacy, while our modern approach to cuisine sets
                the stage for a gastronomic adventure.
              </p>

              <p className="article__one__p__three">
                Indulge in a symphony of flavors as our skilled chefs expertly
                craft a tantalizing menu that celebrates the richness of local
                ingredients and diverse global influences. From the enchanting
                aroma of Ceylon teas to delectable bites seamlessly blending
                traditional recipes with creative twists, every dish is a
                masterpiece of culinary innovation. However, Café Nuwara offers
                more than a dining destination – it's a vibrant cultural
                rendezvous. Immerse yourself in the rhythmic tapestry of Kandyan
                life as you savor flavors, share captivating stories, and create
                cherished memories.
              </p>
            </div>
          </div>
          <div className="second__paragraph">
            <p className="article__two__p__one">
              Whether it's a leisurely afternoon tea or a hearty, unforgettable
              meal with loved ones, every moment at Café Nuwara is an eloquent
              ode to the past and a jubilant celebration of the present.
            </p>
            <p className="article__two__p__two">
              Join us in embracing the fusion of history and flavor at Café
              Nuwara, where each visit is a step back in time, a celebration of
              culture, and a journey of taste that transcends generations.
            </p>
            <img src="/assets/img/lotus-flowers.jpg" alt="lotus" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FirstArticle;
