import React from 'react';

const Navigation = ({ onPrev, onNext, goToContents }) => {
  return (
    <div className="navigation">
      {onPrev && <button onClick={onPrev}>Anterior</button>}
      {goToContents && <button onClick={goToContents}>Menu</button>}
      {onNext && <button onClick={onNext}>Próximo</button>}
    </div>
  );
};

export default Navigation;
