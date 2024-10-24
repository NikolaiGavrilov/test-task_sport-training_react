import { useSelector } from "react-redux";
import DiscountTimer from "../DiscountTimer/DiscountTimer";
import PriceOffer from "../PriceOffer/PriceOffer";
import "./MainPage.scss";
import React from "react";
import PopUp from "../PopUp/PopUp";

const MainPage = () => {
  const discountActivity = useSelector((state) => state.isDiscountActive);

  return (
    <>
      <header style={{ position: "relative", width: "1440px" }}>
        <DiscountTimer />
        {!discountActivity && <PopUp />}
      </header>

      <section className="main-page">
        <h2 className="title">Выберите подходящий тарифный план</h2>
        <div className="main">
          <div className="main__left">
            <img src="img/man.png" alt="спортивный_мужчина" />
          </div>
          <div className="main__right">
            <PriceOffer />
            <p className="description">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <label className="checkbox">
              <input type="checkbox" name="" id="" />
              <span className="checkbox-text">
                Я соглашаюсь с{" "}
                <a href="#" className="checkbox-link">
                  Правилами сервиса
                </a>{" "}
                и условиями<br></br>
                <a href="#" className="checkbox-link checkbox-link__new-line">
                  Публичной оферты
                </a>
                .
              </span>
            </label>
            <button className="buy-btn">Купить</button>
            <p className="disclaimer">
              Нажимая «Купить», Пользователь соглашается на автоматическое
              списание денежных средств по истечению купленного периода.
              Дальнейшие списания по тарифам участвующим в акции осуществляются
              по полной стоимости согласно оферте.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
