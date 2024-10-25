import React, { useState } from "react";
import "./PopUp.scss";

const PopUp = () => {
  const [isPopUpOpen, setIsPopupOpen] = useState(true);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleSelect = (id) => {
    setSelectedOffer(id);
  };

  return isPopUpOpen ? (
    <div className="popup">
      <img
        className="popup__close-btn"
        src="img/close.svg"
        alt="Закрыть"
        onClick={handleClose}
      />
      <p className="popup__zakladka">горящее предложение</p>
      <h2 className="popup__title">
        Не упусти свой <span style={{ color: "#01B9C5" }}>последний шанс</span>
      </h2>
      <p className="popup__text">
        Мы знаем, как трудно начать...{" "}
        <span className="popup__balder-text" style={{ color: "#01B9C5" }}>
          Поэтому!
        </span>
      </p>
      <p className="popup__balder-text popup__with-border">
        Дарим скидку для лёгкого старта 🏃‍♂️
      </p>
      <div className="popup__offers">
        <span className="popup__offers-text">
          Посмотри, что мы для тебя приготовили 🔥
        </span>
        <div className="popup__offers-flex">
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
              <div className={`popup__offer ${isChecked ? 'selected' : ''}`} key={offer.id}>
                <div
                  className={`popup__offer-radio ${isChecked ? "checked selecter" : ""}`}
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
                  {isChecked && <div className="popup__inner-circle" />}{" "}
                </div>
                <label htmlFor={offer.id} className="popup__offer-title">
                  {offer.title}
                </label>
                <p className="popup__offer-old-price">{offer.oldPrice}</p>
                <div className="popup__offer-line" />
                <div className="popup__offer-price-flex">
                  <p className="popup__offer-current-price">
                    {offer.currentPrice}
                  </p>
                  <div className="popup__offer-discount">
                    <div className="popup__offer-discount-text">
                      {offer.discount}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="popup__button">Начать тренироваться</div>
      </div>
    </div>
  ) : null;
};

export default PopUp;
