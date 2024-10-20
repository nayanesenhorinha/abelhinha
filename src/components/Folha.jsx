import React from 'react';
import NavigationButtons from '../components/NavigationButtons';

const Folha = ({ onNext, onPrev, goToMenu }) => {
  return (
    <div>
      <h1>Folha de Rosto</h1>
      <p>Informações sobre o livro...</p>
      <NavigationButtons onPrev={onPrev} onNext={onNext} goToMenu={goToMenu} />
    </div>
  );
};

export default Folha;