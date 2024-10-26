import React, { useState } from "react";
import "./PopUpMobile.scss";

const PopUpMobile = () => {
  const [isPopUpOpen, setIsPopupOpen] = useState(true);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleSelect = (id) => {
    setSelectedOffer(id);
  };

  return isPopUpOpen ? (
    <div className="popup-mobile">
      <img
        className="popup-mobile__close-btn"
        src="img/close.svg"
        alt="Закрыть"
        onClick={handleClose}
      />
      <p className="popup-mobile__zakladka">горящее предложение</p>
      <h2 className="popup-mobile__title">
        Не упусти свой <span style={{ color: "#01B9C5" }}>последний шанс</span>
      </h2>
      <p className="popup-mobile__text">
        Мы знаем, как трудно начать...{" "}
        <span
          className="popup-mobile__balder-text"
          style={{ color: "#01B9C5" }}
        >
          Поэтому!
        </span>
      </p>
      <p className="popup-mobile__balder-text popup-mobile__with-border">
        Дарим скидку для лёгкого старта 🏃‍♂️
      </p>
      <div className="popup-mobile__offers">
        <span className="popup-mobile__offers-text">
          Посмотри, что мы для тебя приготовили 🔥
        </span>
        <div className="popup-mobile__offers-flex">
          {[
            {
              id: "week-offer",
              title: "1 неделя",
              oldPrice: "999₽",
              currentPrice: "599₽",
              discount: "-40%",
            },
            {
              id: "month-offer",
              title: "1 месяц",
              oldPrice: "1690₽",
              currentPrice: "799₽",
              discount: "-50%",
            },
            {
              id: "3months-offer",
              title: "3 месяца",
              oldPrice: "5990₽",
              currentPrice: "1690₽",
              discount: "-60%",
            },
          ].map((offer) => {
            const isChecked = selectedOffer === offer.id;
            return (
              <div
                className={`popup-mobile__offer ${isChecked ? "selected" : ""}`}
                key={offer.id}
              >
                <div
                  className={`popup-mobile__offer-radio ${
                    isChecked ? "checked selecter" : ""
                  }`}
                  onClick={() => handleSelect(offer.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      handleSelect(offer.id);
                    }
                  }}
                  aria-checked={isChecked}
                >
                  {isChecked && <div className="popup-mobile__inner-circle" />}{" "}
                </div>
                <label htmlFor={offer.id} className="popup-mobile__offer-title">
                  {offer.title}
                </label>
                <div className="popup-mobile__offer-price-flex">
                  <p className="popup-mobile__offer-current-price">
                    {offer.currentPrice}
                  </p>
                  <div className="popup-mobile__offer-discount">
                    <div className="popup-mobile__offer-discount-text">
                      {offer.discount}
                    </div>
                  </div>
                </div>
                <p className="popup-mobile__offer-old-price">
                  {offer.oldPrice}
                </p>
              </div>
            );
          })}
        </div>

        <div className="popup-mobile__button">Начать тренироваться</div>
      </div>
    </div>
  ) : null;
};

export default PopUpMobile;
