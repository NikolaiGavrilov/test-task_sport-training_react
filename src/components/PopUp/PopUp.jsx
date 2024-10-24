import React from "react";
import "./PopUp.scss";

const PopUp = () => {
  return (
    <div className="popup">
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
          <div className="popup__offer">
            <input
              type="radio"
              name="question"
              value="week-offer"
              id="week-offer"
            />
            <label for="week-offer" className="popup__offer-title">
              1 неделя
            </label>
            <p className="popup__offer-old-price">999₽</p>
            <p className="popup__offer-current-price">599₽</p>
            <div className="popup__offer-discount">
              <div className="popup__offer-discount-text">-40%</div>
            </div>
          </div>
        </div>
        <div className="popup__button">Начать тренироваться</div>
      </div>
    </div>
  );
};

export default PopUp;
