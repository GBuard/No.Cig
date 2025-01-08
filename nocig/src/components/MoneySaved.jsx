import React from "react";

const MoneySaved = ({ days }) => {
    const pricePerPack = 12.5; // Prix d'un paquet en €
    const cigarettesPerPack = 20; // Nombre de cigarettes par paquet
    const cigarettesPerDay = 10; // Nombre de cigarettes fumées par jour (1/2 paquet)

    // Calcul de l'argent économisé
    const moneySaved =
        (days * cigarettesPerDay * pricePerPack) / cigarettesPerPack;

    return (
        <div>
            <h3>Argent économisé :</h3>
            <p>{moneySaved.toFixed(2)}€</p>
        </div>
    );
};

export default MoneySaved;
