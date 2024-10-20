import React from 'react';
import Navigation from './Navigation';

const Infos2 = ({ onNext, onPrev, goToContents }) => {
  return (
    <div>
      <h1>Sobre o Autor</h1>
      <p>Biografia do autor...</p>
      <Navigation onPrev={onPrev} onNext={onNext} goToContents={goToContents} />
    </div>
  );
};

export default Infos2;
