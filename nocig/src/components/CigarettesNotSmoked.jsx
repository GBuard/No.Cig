import React from "react";

const CigarettesNotSmoked = ({ days }) => {
    const cigarettesPerDay = 10; // Nombre de cigarettes fumées par jour

    // Calcul du nombre de cigarettes non fumées
    const cigarettesNotSmoked = days * cigarettesPerDay;

    return (
        <div>
            <h3>Cigarettes non fumées :</h3>
            <p>{cigarettesNotSmoked} cigarettes</p>
        </div>
    );
};

export default CigarettesNotSmoked;
