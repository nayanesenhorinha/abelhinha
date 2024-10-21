import React from 'react';
import Navigation from './Navigation';

const Infos1 = ({ onNext, onPrev, goToContents, goToCover }) => {
  return (
    <div>
      <h1>Folha de Rosto</h1>
      <p>Informações sobre o livro...</p>
      <Navigation onPrev={onPrev} goToCover={goToCover} onNext={onNext} goToContents={goToContents} />
    </div>
  );
};

export default Infos1;