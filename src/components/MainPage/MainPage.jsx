import { useSelector } from "react-redux";
import DiscountTimer from "../DiscountTimer/DiscountTimer";
import PriceOffer from "../PriceOffer/PriceOffer";
import "./MainPage.scss";
import React from "react";
import PopUp from "../PopUp/PopUp";
import PriceOfferMobile from "../PriceOfferMobile/PriceOfferMobile";
import PopUpMobile from "../PopUpMobile/PopUpMobile";

const MainPage = () => {
  const discountActivity = useSelector((state) => state.isDiscountActive);

  return (
    <>
      <header className="header">
        <DiscountTimer />
        {!discountActivity && <PopUp />}
        {!discountActivity && <PopUpMobile />}
      </header>

      <section className="main-page">
        <div className="title-bg">
          <h2 className="title">Выберите подходящий тарифный план</h2>
        </div>
        <div className="main">
          <div className="main__left">
            <img
              className="main__img"
              src="img/man.png"
              alt="спортивный_мужчина"
            />
          </div>
          <div className="main__right">
            <PriceOffer />
            <PriceOfferMobile />
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
              <span className="checkbox-text-mobile">
                Я соглашаюсь с{" "}
                <a href="#" className="checkbox-link">
                  Правилами сервиса
                </a>
                <br></br>
                <span style={{ paddingLeft: "25px" }}>
                  и условиями{" "}
                  <a href="#" className="checkbox-link">
                    Публичной оферты
                  </a>
                </span>
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
