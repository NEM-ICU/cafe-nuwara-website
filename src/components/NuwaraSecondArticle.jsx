import React from "react";
import "./NuwaraSecondArticle.css";

const NuwaraSecondArticle = () => {
  return (
    <section>
      <div className="second__article__nuwara">
        <div className="nuwara__second__article__wrapper container">
          <div className="nuwara__first__content__box">
            <img
              src="/assets/img/rajasinghe-nuwara.png"
              id="rajasinghe__img"
              alt="king"
            />
            <p>
              King Sri Vikrama Rajasinha, reigning during the late 18th and
              early 19th centuries, emerges as a pivotal figure in Kandy's
              history. With unwavering determination, he valiantly safeguarded
              Kandy's autonomy against colonial encroachment. Notably, his
              legacy includes the construction of the revered Sri Dalada
              Maligawa, a testament to his devotion to both Buddhism and his
              people. Despite his efforts, the Treaty of Amiens in 1802 marked
              the beginning of British influence, culminating in the Kandyan
              Convention of 1815 and his subsequent exile. King Sri Vikrama
              Rajasinha's reign embodies a tale of resilience in the face of
              changing tides, forever etched in the narrative of Kandy's storied
              past.
            </p>
          </div>
          <div className="nuwara__second__content__box">
            <div className="first__row__box">
              <img src="/assets/img/history1.webp" alt="history-logo" />
              <p id="flag__paragraph">
                The old Kandyan flag, a storied relic, unfurls tales of a
                majestic era in Sri Lanka's central highlands. Its intricate
                motifs and regal hues evoke the grandeur of Kandyan royalty,
                encapsulating a time when the kingdom flourished and cultures
                converged. This flag, a symbol of heritage, preserves the legacy
                of a resplendent past, forever etched in the annals of Kandy's
                history.
              </p>
            </div>
            <div className="second__row__box">
              <div className="first__column__box">
                <img src="/assets/img/history2.jpg" alt="history-img2" />
                <p>
                  Meet King Vimaladarmasuriya I, the visionary monarch behind
                  Kandy's iconic Temple of Tooth Relic. His legacy reverberates
                  in the temple's majestic design, a sacred haven where faith
                  and architecture harmonize. Through his devotion, he
                  immortalized Kandy as a sanctuary of spirituality and cultural
                  grandeur, inviting seekers to discover the essence of Sri
                  Lanka's regal past.
                </p>
              </div>
              <div className="second__column__box">
                <img
                  src="/assets/img/history3.jpg"
                  id="royal__palace__img"
                  alt="history-img3"
                />
                <p>
                  Perched amidst misty peaks, the Royal Palace of Kandy unveils
                  a storied past through its ornate design and tranquil gardens.
                  A testament to regal elegance, where each brick and arch
                  whispers tales of an era steeped in grandeur. Explore this
                  living heritage, where the essence of Kandy's royal legacy
                  lingers. Discover the Royal Palace of Kandy, a regal
                  masterpiece 450m away from Café Nuwara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuwaraSecondArticle;
