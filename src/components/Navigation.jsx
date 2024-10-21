import React from 'react';

const Navigation = ({ onPrev, onNext, goToContents, goToCover }) => {
  return (
    <div className="navigation">

      {goToContents && 
        <button onClick={goToContents}>
          <img src="src\assets\menu.png" alt="Sumário" className="nav-icon" />
        </button>}
      {onPrev && 
        <button onClick={onPrev}>
          <img src="src\assets\antes.png" alt="Anterior" className="nav-icon" />
        </button>}
      
      {goToCover && 
        <button onClick={goToCover}>
          <img src="src\assets\casa.png" alt="Capa" className="nav-icon" />
        </button>}
      {onNext && 
        <button onClick={onNext}>
          <img src="src\assets\depois.png" alt="Próxima" className="nav-icon" />
        </button>}
    </div>
  );
};

export default Navigation;
