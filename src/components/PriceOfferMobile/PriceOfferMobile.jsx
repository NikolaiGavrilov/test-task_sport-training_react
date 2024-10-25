import React, { useEffect, useState } from "react";
import "./PriceOfferMobile.scss";
import { useSelector } from "react-redux";

const PriceOfferMobile = () => {
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

  const renderDescription = (duration) => {
    switch (duration) {
      case "1 неделя":
        return "Чтобы просто начать 👍🏻";
      case "1 месяц":
        return `Привести тело в порядок 💪🏻`;
      case "3 месяца":
        return "Изменить образ жизни 🔥";
      case "навсегда":
        return "Всегда быть в форме ⭐️";
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
    <div className="mobile-offers">
      {offers.slice(4, 8).map((offer) => (
        <div
          className={
            offer.duration === "навсегда"
              ? "mobile-offer mobile-offer__forever"
              : "mobile-offer"
          }
          key={offer.duration}
        >
          <div className="mobile-offer__info">
            <div className="mobile-offer__info-left">
              <h2 className="mobile-offer__duration">{offer.duration}</h2>
              <p className="mobile-offer__description">
                {renderDescription(offer.duration)}
              </p>
            </div>
            {discountActivity ? (
              <div className="mobile-offer__prices-flex">
                <p className="mobile-offer__current-price">
                  {renderNewPrice(offer.duration)}₽
                </p>
                <p className="mobile-offer__old-price">{offer.price}₽</p>
              </div>
            ) : (
              <div className="mobile-offer__prices-flex">
                <p className="mobile-offer__current-price">{offer.price}₽</p>
              </div>
            )}

            {discountActivity && (
              <div className="mobile-offer__discount">
                <div className="mobile-offer__discount-text">
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

export default PriceOfferMobile;
