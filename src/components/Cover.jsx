import React from 'react';

const Cover = ({ onNext, goToMenu }) => {
  return (
    <div className="page cover">
      <h1>Capa do E-book</h1>
      <button onClick={onNext}>Entrar no Livro</button>
      <button onClick={() => goToMenu()}>Menu</button>
    </div>
  );
};

export default Cover;
