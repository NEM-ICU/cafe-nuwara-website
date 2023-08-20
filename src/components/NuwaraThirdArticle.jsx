import React from "react";
import "./NuwaraThirdArticle.css";

const NuwaraThirdArticle = () => {
  return (
    <section>
      <div className="nuwara__third__article container">
        <div className="nuwara__third__article__wrapper ">
          <div className="third__article__first__column">
            <div className="article__title">
              <h1> The Temple of Tooth Relic</h1>
            </div>
            <div className="article__boxes">
              <div className="third__sub__article__one">
                <img
                  src="/public/assets/img/third-one.jpg"
                  alt="tooth-temple"
                />
                <p>
                  Enshrined within Kandy's heart, the Temple of Tooth Relic
                  stands as an awe-inspiring tribute to faith and history. A
                  treasure trove of devotion, its sacred chambers cradle a relic
                  of profound significance. Adorned with intricate artistry,
                  it's a symphony of spirituality where the past and present
                  unite. Embrace a journey through time and culture, as the
                  temple's divine aura beckons seekers and admirers alike.
                  Journey just 350m from Café Nuwara and embrace the spiritual
                  aura of the Temple of Tooth Relic in Kandy.
                </p>
              </div>
              <div className="third__sub__article__two">
                <img src="/public/assets/img/third-two.jpg" alt="wall-paint" />
                <p>
                  The Temple of Tooth Relic, nestled in Kandy, serves as a
                  living testament to Sri Lanka's rich history and the essence
                  of Kandyan culture. Its revered halls cradle a relic steeped
                  in significance, resonating with tales of kings and dynasties.
                  This sacred sanctuary echoes the heartbeats of bygone eras,
                  encapsulating the evolution of Sri Lanka's heritage, while
                  standing as an emblem of Kandyan pride and cultural endurance.
                </p>
              </div>
            </div>
          </div>
          <div className="third__article__second__column">
            <img
              src="/public/assets/img/third-three.jpg"
              alt="esala-perahera"
            />
            <h2>Kandy Esala Perahera</h2>
            <p>
              The Esala Perahera is a captivating cultural event in Kandy, Sri
              Lanka. This annual religious festival centers around the
              veneration of the Sacred Tooth Relic of the Buddha. Over ten
              nights, the city comes alive with a mesmerizing procession
              featuring elegantly adorned elephants, traditional dancers,
              musicians, and ornate floats. The streets are illuminated with
              vibrant lights, creating an enchanting atmosphere of reverence and
              festivity. Pilgrims and spectators from around the world gather to
              witness this splendid spectacle, celebrating both spiritual
              devotion and the rich cultural heritage of Sri Lanka. The Esala
              Perahera stands as a testament to the country's traditions and
              community spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuwaraThirdArticle;
