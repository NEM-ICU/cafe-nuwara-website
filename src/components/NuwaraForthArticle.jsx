import React from "react";

import "./NuwaraForthArticle.css";

const NuwaraForthArticle = () => {
  return (
    <section>
      <div className="kandy__forth__article">
        <div className="kandy__forth__article__wrapper container">
          <div className="article__title__kandy">
            <img src="/assets/svg/flower4.png" alt="flower" />
            <h2>Exploring Kandy: Essential Places to Visit</h2>
            <img
              src="/assets/svg/rink-black.svg"
              className="rink"
              alt="rink"
            />
          </div>
          <div className="forth__article__content">
            <div className="forth__article__column__one">
              <img src="/assets/img/old-town.jpg" alt="old-town-image" />
              <p>
                Nestled amidst the lush embrace of Kandy, Café Nuwara offers
                more than just culinary delights – it's your gateway to a
                vibrant tapestry of heritage and culture. As you sip your coffee
                and savor delectable bites, you're surrounded by the heartbeat
                of a city that holds history within its very stones
              </p>
            </div>
            <div className="forth__article__column__two">
              <p>
                Step outside and let Café Nuwara be your starting point to an
                immersive experience. Discover Kandy's crown jewel, the Temple
                of the Tooth Relic, a testament to centuries of devotion and
                artistry. Wander through the Royal Palace, where echoes of
                Kandyan royalty whisper secrets of a regal past.
              </p>
              <p>
                A short stroll from Café Nuwara leads you to the enchanting
                Kandy Lake, where serenity meets beauty in a picturesque
                setting. And don't miss the bustling Kandy Market, where vibrant
                stalls showcase the soul of local craftsmanship.
              </p>
            </div>
            <div className="forth__article__column__three">
              <p>
                Café Nuwara's location isn't just convenient – it's
                strategically placed in the heart of Kandy's cultural canvas.
                Amidst the charm of colonial architecture, bustling markets, and
                tranquil lakes, Café Nuwara beckons you to explore, engage, and
                immerse yourself in Kandy's legacy.
              </p>
              <p>
                So, whether you're a local seeking to reconnect with your roots
                or a traveler eager to delve into Kandy's allure, Café Nuwara
                invites you to make memories, taste history, and discover the
                pulse of this captivating city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuwaraForthArticle;
