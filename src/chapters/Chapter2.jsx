import React from 'react';

const Chapter2 = ({ onPrev, onNext, goToMenu }) => {
  return (
    <div className="page chapter">
      <h2>Capítulo 2</h2>
      <p>
        Este é o conteúdo do capítulo 2. O conteúdo completo ficará aqui, podendo ser estilizado
        conforme necessário.
      </p>
      <button onClick={onPrev}>Anterior</button>
      <button onClick={onNext}>Próximo</button>
      <button onClick={() => goToMenu()}>Menu</button>
    </div>
  );
};

export default Chapter2;
