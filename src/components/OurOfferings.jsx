import React from "react";
import "./OurOfferings.css";

const OurOfferings = () => {
  return (
    <div className="our__offerings container">
      <div className="title">We Offer</div>
      <div className="our__offerings__wrapper">
        <div className="first__box">
          <div className="first__content__box">
            <h2 className="offering__heading">Restaurant</h2>
            <img src="/assets/img/owr-offerings-img-1.jpg" alt="" />
            <p className="our__offerings__paragraph_1 our__offering_p">
              Experience a gastronomic paradise at Café Nuwara's open-air
              restaurant. Relish mouthwatering burgers, shawarmas, and an array
              of delectable bites, expertly prepared to tantalize your taste
              buds. Quench your thirst with refreshing cocktails that perfectly
              complement your meal. While you await your culinary masterpiece,
              explore our charming shop featuring locally crafted treasures –
              the perfect souvenirs for your loved ones. Revel in the ultimate
              dining experience where exquisite flavors, al fresco ambiance, and
              a touch of Kandyan charm unite to create unforgettable moments.
            </p>
          </div>
          <div className="first__box__second__layout">
            <div className="second__content__box">
              <img
                src="/assets/img/barista 1.jpg"
                id="barista__img"
                alt="barista-image"
              />
              <div className="box__content__box">
                <h2 className="offering__heading" id="barista__heading">
                  Barista
                </h2>
                <p className="our__offerings__paragraph_3 our__offering_p">
                  {/* Crafting Coffee Elegance: Our Barista, a true artisan,
                  meticulously curates coffee experiences that harmonize the
                  timeless allure of colonial era with the vibrant spirit of
                  Kandyan heritage. With each pour, they blend the past and
                  present, offering you a symphony of flavors that reflect the
                  essence of Sri Lanka. Join us in savoring every sip as our
                  Barista's expertise unfolds in every cup, weaving a tale of
                  tradition and innovation that captures the essence of our
                  cafe's cultural fusion. */}
                  Crafting Coffee Elegance: Our Barista, a true artisan,
                  meticulously curates coffee experiences that harmonize the
                  timeless allure of colonial era with the vibrant spirit of
                  Kandyan heritage. With each pour, they blend the past and
                  present, offering you a symphony of flavors that reflect the
                  essence of Sri Lanka. Join us in savoring every sip as our
                  Barista's expertise unfolds in every cup, weaving a tale of
                  tradition, innovation, and taste that captures the essence of
                  our cafe's cultural fusion.
                </p>
              </div>
            </div>
            <div className="third__content__box">
              <div className="box__content__box">
                <h2
                  className="offering__heading barista_heading"
                  id="evets__and__parties__heading"
                >
                  Events & Parties
                </h2>
                <p className="our__offerings__paragraph_2 our__offering_p">
                  Elevate Your Occasions: Experience the fusion of colonial
                  grace and Kandyan flair in our versatile venue. From intimate
                  gatherings to grand celebrations, our unique ambiance and
                  cuisine create unforgettable events. Let us craft moments that
                  blend tradition and modernity, making your special occasions
                  truly timeless.
                </p>
              </div>

              <img
                src="/assets/img/owr-offerings-img-2.jpg"
                id="events_and_parties_img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="second__box">
          <div className="second__box__wrapper">
            <div className="first__column">
              <div className="first__content__box">
                <img
                  src="/assets/img/owr-offerings-img-3.jpg"
                  id="photo_and_video_shoots_img"
                  alt=""
                />
                <div className="box__separator__first__column">
                  <h2 className="offering__heading photo_and_video_shoots_heading">
                    Photo & Video Shoots
                  </h2>
                  <p className="our__offerings__paragraph_4 our__offering_p">
                    Captivating Visuals, Captured Here: Our captivating
                    colonial-Kandyan setting offers an enchanting backdrop for
                    photo and video shoots. With every frame, history and
                    culture intertwine, adding depth to your visuals. Let the
                    ambiance inspire your creativity as you tell stories, evoke
                    emotions, and showcase your vision. Our location is your
                    canvas, where every shot paints a masterpiece that echoes
                    the essence of Sri Lankan heritage.
                  </p>
                </div>
              </div>
              <div className="second__content__box">
                <div className="box__separator__first__column">
                  <h2 className="offering__heading corporate_get_togethers_heading">
                    Corporate Get-togethers
                  </h2>
                  <p className="our__offerings__paragraph_5 our__offering_p">
                    Elevate Corporate Gatherings: Infuse your meetings and
                    corporate events with the charm of our colonial-Kandyan
                    ambiance. Our versatile space accommodates seamless business
                    interactions amidst cultural finesse. Engage in productive
                    discussions, build connections, and foster innovation
                    against the backdrop of tradition and elegance. Let us host
                    your corporate get-togethers, where every moment is designed
                    to inspire, creating a harmonious blend of work and culture.
                  </p>
                </div>
                <img
                  src="/assets/img/owr-offerings-img-4.jpg"
                  id="corporate_get_togethers_img"
                  alt=""
                />
              </div>
            </div>
            <div className="third__content__box">
              <h2 className="offering__heading" id="work__from__cafe__heading">
                Work from Cafe
              </h2>
              <img
                src="/assets/img/owr-offerings-img-5.jpg"
                id="work_from_cafe_img"
                alt=""
              />
              <p className="our__offerings__paragraph_6 our__offering_p">
                Inspiring Workspace: Blend work and culture in our
                colonial-Kandyan cafe. Elevate productivity with an ambiance
                that sparks creativity. Fuel your tasks while relishing our
                culinary offerings. Experience a unique work-life balance where
                history meets modernity, making every moment productive and
                enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
