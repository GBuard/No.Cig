import React, { useEffect, useState } from "react";
import Chrono from "./Chrono";
import MoneySaved from "./MoneySaved";

const Dashboard = () => {
    const [userStats, setUserStats] = useState(null);
    const [days, setDays] = useState(0); // État pour le nombre de jours

    useEffect(() => {
        // Remplace l'ID utilisateur par celui de ton backend
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
            {/* Chrono calcule les jours et les transmet via setDays */}
            <Chrono
                startDate={userStats.startDate}
                onDaysCalculated={setDays}
            />

            {/* MoneySaved utilise les jours calculés */}
            <MoneySaved days={days} />
        </div>
    );
};

export default Dashboard;
