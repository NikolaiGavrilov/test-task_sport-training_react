import React, { useEffect, useState } from "react";
import "./PriceOffer.scss";
import { useSelector } from "react-redux";

const PriceOffer = () => {
  const discountActivity = useSelector((state) => state.isDiscountActive);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(
          "https://t-pay.iqfit.app/subscribe/list-test"
        );
        const data = await response.json();
        const filteredOffers = data.map((offer) => ({
          duration: offer.name,
          price: offer.price,
        }));
        setOffers(filteredOffers);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchOffers();
  }, []);

  // const renderDescription = (duration) => {
  //   switch (duration) {
  //     case "1 неделя":
  //       return "Чтобы просто начать 👍🏻";
  //     case "1 месяц":
  //       return `Привести тело в порядок 💪🏻`;
  //     case "3 месяца":
  //       return "Изменить образ жизни 🔥";
  //     case "навсегда":
  //       return "Всегда быть в форме и поддерживать своё здоровье ⭐️";
  //     default:
  //       return null;
  //   }
  // };

  const renderDescription = (duration) => {
    switch (duration) {
      case "1 неделя":
        return (
          <>
            Чтобы просто<br></br>начать 👍🏻
          </>
        );
      case "1 месяц":
        return (
          <>
            Привести тело<br></br>в порядок 💪🏻
          </>
        );
      case "3 месяца":
        return (
          <>
            Изменить<br></br>образ жизни 🔥
          </>
        );
      case "навсегда":
        return (
          <>
            Всегда быть в форме<br></br>и поддерживать своё<br></br>здоровье ⭐️
          </>
        );
      default:
        return null;
    }
  };

  const renderDiscount = (duration) => {
    switch (duration) {
      case "1 неделя":
        return 0.3;
      case "1 месяц":
        return 0.4;
      case "3 месяца":
        return 0.5;
      case "навсегда":
        return 0.7;
      default:
        return null;
    }
  };

  const renderNewPrice = (duration) => {
    switch (duration) {
      case "1 неделя":
        return "699";
      case "1 месяц":
        return "999";
      case "3 месяца":
        return "2990";
      case "навсегда":
        return "5990";
      default:
        return null;
    }
  };

  return (
    <div className="offers">
      {offers.slice(4, 8).map((offer) => (
        <div
          className={
            offer.duration === "навсегда" ? "offer offer__big" : "offer"
          }
          key={offer.duration}
        >
          <div className="offer__info">
            <h2 className="offer__duration">{offer.duration}</h2>
            {discountActivity ? (
              <div className="offer__prices-flex">
                <p className="offer__current-price">
                  {renderNewPrice(offer.duration)}₽
                </p>
                <p className="offer__old-price">{offer.price}₽</p>
              </div>
            ) : (
              <div className="offer__prices-flex">
                <p className="offer__current-price">{offer.price}₽</p>
              </div>
            )}

            <p className="offer__description">
              {renderDescription(offer.duration)}
            </p>
            {discountActivity && (
              <div className="offer__discount">
                <div className="offer__discount-text">
                  -{renderDiscount(offer.duration) * 100}%
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceOffer;
