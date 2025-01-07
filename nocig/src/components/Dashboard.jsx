import React, { useEffect, useState } from 'react';
import Chrono from './Chrono';

const Dashboard = () => {
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const userId = 'uniqueUserId123';

    fetch(`http://localhost:5000/api/stats/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('API response:', data); // Vérifie ici si `startDate` est présent
        setUserStats(data);
      })
      .catch((error) => console.error('Error fetching user stats:', error));
  }, []);

  if (!userStats) {
    return <div>Loading...</div>;
  }

  if (!userStats.startDate) {
    console.error('startDate is missing in userStats:', userStats);
    return <div>Start date is missing.</div>;
  }

  return (
    <div>
      {/* Passe la vraie valeur de startDate */}
      <Chrono startDate={userStats.startDate} />
    </div>
  );
};

export default Dashboard;
