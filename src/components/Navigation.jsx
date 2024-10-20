import React from 'react';

const Navigation = ({ onPrev, onNext, goToContents }) => {
  return (
    <div className="navigation">
      {onPrev && <button onClick={onPrev}>Anterior</button>}
      {onNext && <button onClick={onNext}>Próximo</button>}
      <button onClick={goToContents}>Menu</button>
    </div>
  );
};

export default Navigation;
