import React, { useState, useEffect } from "react";

const CountDownSection = ({ countDownDate,setAlerts }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const endDate = new Date(countDownDate).getTime();
      const distance = endDate - now;
      
      if (distance >= 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
       else {
        // Optionally handle countdown complete
        
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [countDownDate]);
  return (
    <div className="counters">
      <div className="counter">
        <span id="days">{days}</span>
        <p>Days</p>
      </div>

      <div className="counter">
        <span id="hours">{hours}</span>
        <p>Hours</p>
      </div>

      <div className="counter">
        <span id="minutes">{minutes}</span>
        <p>Minutes</p>
      </div>

      <div className="counter">
        <span id="seconds">{seconds}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountDownSection;
