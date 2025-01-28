import React from "react";

const LifeGained = ({ days, cigarettesPerDay }) => {
    const minutesPerCigarette = 15; // Temps gagné par cigarette (en minutes)

    // Calcul du total de minutes de vie gagnées
    const totalCigarettesNotSmoked = days * cigarettesPerDay;
    const totalMinutesGained = totalCigarettesNotSmoked * minutesPerCigarette;

    // Conversion des minutes en jours, heures, minutes
    const daysGained = Math.floor(totalMinutesGained / (24 * 60));
    const hoursGained = Math.floor((totalMinutesGained % (24 * 60)) / 60);
    const minutesGained = totalMinutesGained % 60;

    return (
        <div>
            <h3>Temps de vie gagné :</h3>
            <p>
                {daysGained} jours, {hoursGained} heures, {minutesGained}{" "}
                minutes
            </p>
        </div>
    );
};

export default LifeGained;
