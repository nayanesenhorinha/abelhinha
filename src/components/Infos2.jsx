import React from 'react';
import Navigation from './Navigation';

const Infos2 = ({ 
  onNext, 
  goToContents, 
  goToCover }) => {

  return (
    <div className="page autor">

      <img 
        className="icone_cabeco" 
        src="https://via.placeholder.com/25" 
        alt="Imagem Placeholder"/>

      <p className="autor_intro">
        uma história de
      </p>

      <img 
        className="autor_foto" 
        src="https://via.placeholder.com/150" 
        alt="Imagem Placeholder"/>
        
      <p className="autor_nome">
        Lewis Carroll
      </p>
      
      <Navigation 
        onNext={onNext} 
        goToCover={goToCover}  
        goToContents={goToContents} />

    </div>
  );
};

export default Infos2;
