import React from 'react';

const NavigationButtons = ({ onPrev, onNext, goToMenu }) => {
  return (
    <div className="navigation-buttons">
      {onPrev && <button onClick={onPrev}>Anterior</button>}
      {onNext && <button onClick={onNext}>Próximo</button>}
      <button onClick={goToMenu}>Menu</button>
    </div>
  );
};

export default NavigationButtons;
