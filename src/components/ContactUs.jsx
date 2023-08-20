import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
useState;

const ContactUs = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    subject: "",
    isRecommended: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  console.log(feedback);
  const handleFeedback = () => {};

  return (
    <div className="contact__us__wrapper container">
      <div className="page__title">
        <h2>contact</h2>
      </div>
      <div className="contact__us__page">
        <div className="contact__us__column">
          <div className="contact__us__title">
            <h3>contact us</h3>
          </div>
          <div className="contact__us__para">
            <p>
              Contact Us: Your Gateway to Exceptional Service. Our dedicated
              team stands ready to address your inquiries, facilitate
              reservations, and ensure a seamless experience within our
              colonial-Kandyan ambiance. Reach out today for personalized
              assistance and to embark on a journey of refined hospitality.
            </p>
          </div>
          <div className="contact__us__nav">
            <div className="contact__us__box1">
              <div className="contact__us__link__item">
                <h2>facebook</h2>
                <Link to="/"> like us</Link>
              </div>
              <div className="contact__us__link__item">
                <h2>youtube</h2>
                <Link to="/"> watch our videos</Link>
              </div>
            </div>
            <div className="contact__us__box2">
              <div className="contact__us__link__item">
                <h2>instagram</h2>
                <Link to="/"> follow us</Link>
              </div>
              <div className="contact__us__link__item">
                <h2>email us</h2>
                <Link to="/"> info@nuwara.cafe</Link>
              </div>
            </div>
            <div className="contact__us__box3">
              <div className="contact__us__link__item">
                <h2>store enquiries</h2>
                <Link to="/"> info@nuwara.cafe</Link>
              </div>
            </div>
          </div>
          <div className="map__img">
            <img src="/assets/img/cafe-nuwara-map.jpg" alt="map-img" />
          </div>
        </div>
        <div className="feedback__column">
          <div className="feedback__us__title">
            <h3>~</h3>
            <h3>give us your feedback</h3>
          </div>
          <div className="feedback__para">
            <p>
              At Café Nuwara, your thoughts matter. We invite you to share your
              valuable feedback, helping us shape memorable dining experiences.
              Your insights enable us to continuously refine our offerings,
              ensuring each visit is as exceptional as the last. Whether you
              enjoyed our delectable dishes, savored the ambiance, or have
              suggestions for improvement, your feedback fuels our commitment to
              excellence. Let your voice be heard and be a part of Café Nuwara's
              journey towards creating unforgettable moments.
            </p>
          </div>
          <div className="feedback__form__wrapper">
            <div className="feedback__form">
              <form onSubmit={handleFeedback}>
                <label htmlFor="name">your name</label>
                <input
                  type="text"
                  className="feedback__input"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
                <label htmlFor="email">your email address</label>
                <input
                  type="email"
                  className="feedback__input"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
                <label htmlFor="subject">
                  what are you contacting us about
                </label>
                <input
                  type="text"
                  className="feedback__input"
                  name="subject"
                  id="subject"
                  onChange={handleChange}
                />
                <label htmlFor="isRecommended">
                  would you recommend us to a friend
                </label>
                <input
                  type="text"
                  className="feedback__input"
                  name="isRecommended"
                  id="isRecommended"
                  onChange={handleChange}
                />
                <label htmlFor="message">message</label>
                <textarea
                  type="text"
                  placeholder="Optional... but appreciated"
                  className="feedback__input feedback__input--textarea"
                  name="message"
                  id="message"
                  onChange={handleChange}
                />
                <div className="submit__wrapper">
                  <button className="o-btn--feedback">send feedback</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
