import React, { useEffect, useState } from "react";

const Chrono = ({ startDate, onDaysCalculated }) => {
    const [timeElapsed, setTimeElapsed] = useState(null);

    useEffect(() => {
        const calculateTimeElapsed = () => {
            const now = new Date();
            const start = new Date(startDate);
            const diff = Math.abs(now - start);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeElapsed({ days, hours, minutes, seconds });

            // Envoie les jours calculés à MoneySaved via le parent
            if (onDaysCalculated) {
                onDaysCalculated(days);
            }
        };

        calculateTimeElapsed();
        const interval = setInterval(calculateTimeElapsed, 1000);
        return () => clearInterval(interval);
    }, [startDate, onDaysCalculated]);

    if (!timeElapsed) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>À arrêté depuis :</h3>
            <p>
                {timeElapsed.days} jours, {timeElapsed.hours} heures,{" "}
                {timeElapsed.minutes} minutes, {timeElapsed.seconds} secondes
            </p>
        </div>
    );
};

export default Chrono;
