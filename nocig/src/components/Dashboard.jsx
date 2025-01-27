import React, { useEffect, useState } from "react";
import Chrono from "./Chrono";
import MoneySaved from "./MoneySaved";
import CigarettesNotSmoked from "./CigarettesNotSmoked";

const Dashboard = () => {
    const [userStats, setUserStats] = useState(null);
    const [days, setDays] = useState(0); // État pour les jours

    useEffect(() => {
        const userId = "uniqueUserId123";

        fetch(`http://localhost:5000/api/stats/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setUserStats(data);
            })
            .catch((error) =>
                console.error("Error fetching user stats:", error)
            );
    }, []);

    if (!userStats) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Chrono
                startDate={userStats.startDate}
                onDaysCalculated={setDays}
            />
            <MoneySaved days={days} />
            <CigarettesNotSmoked days={days} />
        </div>
    );
};

export default Dashboard;
