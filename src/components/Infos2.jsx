import React from 'react';
import Navigation from './Navigation';
import chapters from '../control/chapters';

const autor = chapters[0].autor; 

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
        {autor}
      </p>
      
      <Navigation 
        onNext={onNext} 
        goToCover={goToCover}  
        goToContents={goToContents} />

    </div>
  );
};

export default Infos2;
