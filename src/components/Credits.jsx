import React from 'react';
import Navigation from './Navigation';
import '../styles/ebook.css';

const Credits = ({ 
    onNext, 
    onPrev, 
    goToContents, 
    goToCover }) => {

  return (
    <div className="page credits">
        <p className="credits_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend risus non posuere tristique. Nunc maximus efficitur augue ut interdum. Quisque arcu risus, vulputate ac dolor nec, scelerisque vestibulum sapien. Aliquam erat volutpat. Phasellus at dignissim sem. Nullam id aliquam urna, pretium tempus elit. Duis luctus purus est, at fermentum nisl aliquam eget.
        </p>
        
        <div className="credits_produtor">
            <p className="produtor_titulo">
                Projeto Editorial
            </p>
            <p className="produtor_nome">
                Nayane de Souza
            </p>
        </div>

        <img className="credits_logo_editora" src="https://via.placeholder.com/50" alt="Imagem Placeholder"/>

        <div className="credits_agradecimentos">
            <p className="agradecimentos_titulo">
                Agradecimentos
            </p>
            <div className="agradecimentos_nome">
                <p>Paulo César Castro</p>
                <p>Laura da Conceição</p>
                <p>&</p>
                <p>João Victor da Conceição Alves</p>
            </div>
        </div>

        <Navigation 
            onPrev={onPrev} 
            goToCover={goToCover} 
            onNext={onNext} 
            goToContents={goToContents} />
        </div>
  );
};

export default Credits;