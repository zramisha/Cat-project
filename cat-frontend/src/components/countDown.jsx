import React, { useState, useEffect } from 'react';

const CountDown = ({ date }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content" key={interval}>
                <span className="countdown font-mono text-3xl">
                    <span style={{ "--value": timeLeft[interval] }}>{timeLeft[interval]}</span>
                </span>
                {interval}
            </div>
        );
    });

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max my-5">
            {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
        </div>
    );
};

export default CountDown;
