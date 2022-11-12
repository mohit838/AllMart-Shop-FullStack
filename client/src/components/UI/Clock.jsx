import React, { useEffect, useState } from "react";
import "./../../styles/clock.css";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    // Offer Ending Date
    const destination = new Date("Dec 10, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = destination - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <>
      <div className="clockWrapper d-flex align-items-center gap-5">
        {/* Days */}
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{days}</h1>
            <h5 className="text-white fs-6">Days</h5>
          </div>
          <span className="text-white fs-3">:</span>
        </div>
        {/* Hours */}
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{hours}</h1>
            <h5 className="text-white fs-6">Hour</h5>
          </div>
          <span className="text-white fs-3">:</span>
        </div>
        {/* Minutes */}
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{minutes}</h1>
            <h5 className="text-white fs-6">Minute</h5>
          </div>
          <span className="text-white fs-3">:</span>
        </div>
        {/* Seconds */}
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{seconds}</h1>
            <h5 className="text-white fs-6">Second</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
