import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DiscountTimer.scss";
import { endDiscount } from "../../redux/actions";

const DiscountTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1);
  const dispatch = useDispatch();
  const discountActivity = useSelector((state) => state.isDiscountActive);

  useEffect(() => {
    if (!discountActivity) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          setTimeout(() => {
            dispatch(endDiscount());
          }, 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, discountActivity]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const isAlmostExpired = timeLeft <= 30;

  return (
    <div className={`timer ${isAlmostExpired ? "flashing" : ""}`}>
      <div className="timer__content">
        <p className="timer__text">
          Скидка действует:{" "}
          <span
            className="timer__numbers"
            style={{ color: isAlmostExpired ? "#FD4D35" : "#01B9C5" }}
          >
            {formatTime(timeLeft)}
          </span>
        </p>
        <p className="timer__minutes">минут</p>
        <p className="timer__seconds">секунд</p>
      </div>
    </div>
  );
};

export default DiscountTimer;
