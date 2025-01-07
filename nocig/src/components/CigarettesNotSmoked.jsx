import React from 'react';

const CigarettesNotSmoked = ({ cigarettesAvoided }) => {
  return (
    <div>
      <h3>Cigarettes Avoided</h3>
      <p>{cigarettesAvoided}</p>
    </div>
  );
};

export default CigarettesNotSmoked;
