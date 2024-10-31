import React, { useEffect } from 'react';
import Navigation from './Navigation';
import '../styles/ebook.css';
import bookTitle from '../control/title';

const Credits = ({ 
    onNext, 
    goToContents, 
    goToCover }) => {

    const chapterTitle = "Créditos";

    useEffect(() => {
        bookTitle(chapterTitle); 
        return () => {
            document.title = "As Aventuras de Alice no País das Maravilhas"; 
        };
    }, [chapterTitle]);

  return (
    <div className="page credits">
        <img 
            className="icone_cabeco cabeco_creditos" 
            src="https://via.placeholder.com/25" 
            alt="Imagem Placeholder"/>

        <div>
            <p className="credits_text">
                Este e-book foi concebido como projeto de conclusão do curso de Produção Editorial na UFRJ, um trabalho que nasceu da persistência e do encantamento pelas palavras.
            </p>

            <p className="credits_text">
                Agradeço, com especial carinho, ao João Victor, por sua paciência e olhar encorajador; à minha mãe, por seu suporte constante; e ao meu orientador, que, com seu saber cuidadoso, guiou cada etapa desta jornada.
            </p>
        </div>

        <img 
            className="credits_logo_editora" 
            src="https://via.placeholder.com/50" 
            alt="Imagem Placeholder"/>

        <Navigation 
            goToCover={goToCover} 
            onNext={onNext} 
            goToContents={goToContents} />
        </div>
  );
};

export default Credits;