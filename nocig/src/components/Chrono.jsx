/* 
Étape 4 : Connecter le frontend au backend
Pour récupérer les données dans ton composant Chrono.jsx, tu vas utiliser fetch ou une bibliothèque comme axios.

Ajout de la récupération des données dans Chrono.jsx :
*/

import React, { useState, useEffect } from 'react';

const Chrono = () => {
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    // Remplace l'ID par celui de l'utilisateur dans ta collection
    const userId = 'uniqueUserId123';
    fetch(`http://localhost:5000/api/stats/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserStats(data);
      })
      .catch((error) => {
        console.error('Error fetching user stats:', error);
      });
  }, []);

  if (!userStats) {
    return <p>Loading...</p>;
  }

  const { startDate, moneySaved, lifeGained } = userStats;

  return (
    <div>
      <h1>Chrono</h1>
      <p>Start Date: {new Date(startDate).toLocaleDateString()}</p>
      <p>Money Saved: {moneySaved}€</p>
      <p>Life Gained: {lifeGained} hours</p>
    </div>
  );
};

export default Chrono;
