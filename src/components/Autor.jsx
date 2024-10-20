import React from 'react';

const Autor = ({ onNext, onPrev, goToMenu }) => {
  return (
    <div>
      <h1>Sobre o Autor</h1>
      <p>Biografia do autor...</p>
      <button onClick={onPrev}>Anterior</button>
      <button onClick={onNext}>Próximo</button>
      <button onClick={goToMenu}>Menu</button>
    </div>
  );
};

export default Autor;
