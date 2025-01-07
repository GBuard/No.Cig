/* 
Étape 4 : Connecter le frontend au backend
Pour récupérer les données dans ton composant Chrono.jsx, tu vas utiliser fetch ou une bibliothèque comme axios.

Ajout de la récupération des données dans Chrono.jsx :
*/






/*
import React, { useEffect, useState } from 'react';

const Chrono = () => {
  const [userStats, setUserStats] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(null);

  useEffect(() => {
    // Remplace l'ID utilisateur par celui de ton backend
    const userId = 'uniqueUserId123';

    fetch(`http://localhost:5000/api/stats/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserStats(data);

        // Calculer le temps écoulé dès que les données sont récupérées
        const calculateTimeElapsed = () => {
          const now = new Date();
          const start = new Date(data.startDate);
          const diff = Math.abs(now - start);

          setTimeElapsed({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
          });
        };

        calculateTimeElapsed();
        const interval = setInterval(calculateTimeElapsed, 1000);
        return () => clearInterval(interval);
      })
      .catch((error) => {
        console.error('Error fetching user stats:', error);
      });
  }, []);

  if (!userStats || !timeElapsed) {
    return <div>Loading...</div>;
  }

  const { moneySaved, lifeGained } = userStats;

  return (
    <div>
      <h2>My Progress</h2>
      <div>
        <h3>Time since quitting:</h3>
        <p>
          {timeElapsed.days} days, {timeElapsed.hours} hours, {timeElapsed.minutes} minutes,{' '}
          {timeElapsed.seconds} seconds
        </p>
      </div>
      <div>
        <p>Money Saved: {moneySaved}€</p>
        <p>Life Gained: {lifeGained} hours</p>
      </div>
    </div>
  );
};

export default Chrono;



*/
import React, { useEffect, useState } from 'react';

const Chrono = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState(null);

  // Vérifie que la prop est bien reçue
  console.log('Received startDate:', startDate);

  useEffect(() => {
    if (!startDate) {
      console.error('startDate is undefined or null');
      return;
    }

    const calculateTimeElapsed = () => {
      const now = new Date();
      const start = new Date(startDate); // Conversion de la date
      const diff = Math.abs(now - start);

      setTimeElapsed({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  if (!timeElapsed) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Time since quitting:</h3>
      <p>
        {timeElapsed.days} days, {timeElapsed.hours} hours, {timeElapsed.minutes} minutes,{' '}
        {timeElapsed.seconds} seconds
      </p>
    </div>
  );
};

export default Chrono;
