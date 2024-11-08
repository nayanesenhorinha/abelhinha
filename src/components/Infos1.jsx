import React from 'react';
import Navigation from './Navigation';

const Infos1 = ({ 
  onNext, 
  goToContents, 
  goToCover }) => {

  return (
    <div className="page info">

      <p className="info_nome_autor">
        Lewis Carroll
      </p>
      
      <h1 className="info_titulo_livro">
        As Aventuras de Alice no País das Maravilhas
      </h1>
      
      <img 
        className="info_logo_editora" 
        src="https://via.placeholder.com/50" 
        alt="Imagem Placeholder"/>
    
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToContents={goToContents} />
        
    </div>
  );
};

export default Infos1;