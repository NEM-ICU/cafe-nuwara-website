import React from "react";

import "./NuwaraFirstArticle.css";

const NuwaraFirstArticle = () => {
  return (
    <>
      <section className="kandy__first__article container">
        <div className="article__wrapper">
          <div className="title__kandy">
            <img src="/public/assets/svg/flower3.svg" alt="flower" />
            <h2>The Kingdom Of Kandy</h2>
            <img
              src="/public/assets/svg/rink-black.svg"
              className="rink"
              alt="rink"
            />
          </div>
          <div className="first__paragraph__nuwara">
            <p>
              In Sinhala, "Nuwara" signifies Kandy. Our cafe, Cafe Nuwara, pays
              homage to this historical city. Nuwara, the seat of the last
              Sinhalese kingdom, reflects the essence of our heritage and
              culture.
            </p>
            <p id="first__paragraph__second__p">
              Amid the verdant hills of Sri Lanka, a kingdom emerged, a realm of
              splendor known as Kandy. Kings, like titans of history, ruled with
              grace and valor, their footsteps etched in the annals of time.
              Within the hallowed walls of the Temple of the Sacred Tooth Relic,
              a relic revered by monarchs, the essence of Kandyan sovereignty
              was enshrined. Streets echoed with the cadence of Kandyan dance, a
              symphony of heritage and heritage that still resonates. Kandy's
              saga witnessed the Kandyan Convention, where resilience stood firm
              against colonial currents. Every cobblestone street, every
              intricate dance step, whispered stories of a kingdom that dared to
              defy. Today, the Kandyan spirit thrives, infusing life into Esala
              Perahera, a grand procession of history and devotion. Kandy Lake
              mirrors the city's majestic soul, a tranquil witness to epochs
              past. Embrace Kandy, where the echoes of regal kings, the ardor of
              dance, and the steadfastness of a kingdom dwell, an everlasting
              legacy etched in the heart of Sri Lanka.
            </p>
          </div>
        </div>
      </section>
      <div className="separator__image">
        <img src="/public/assets/img/nuwara-first-photo.jpg" alt="" />
      </div>
    </>
  );
};

export default NuwaraFirstArticle;
