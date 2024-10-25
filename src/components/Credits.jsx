import React, { useEffect } from 'react';
import Navigation from './Navigation';
import '../styles/ebook.css';
import bookTitle from '../control/title';

const Credits = ({ 
    onNext, 
    onPrev, 
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
        <p className="produtor_titulo">
                Projeto Gráfico e Editorial
        </p>
        <p className="produtor_nome">
            Nayane de Souza
        </p>
        <p className="credits_text">
        Este e-book foi desenvolvido como parte do trabalho de conclusão do curso de Produção Editorial da Universidade Federal do Rio de Janeiro. Todos os aspectos deste projeto — desde o design, tradução até o desenvolvimento — foram resultados da pesquisa de Nayane de Souza. Agradeço a todos que acompanharam e apoiaram este trabalho. Este projeto representa a conclusão de uma jornada acadêmica dedicada ao design de livros.
        </p>
        <img className="credits_logo_editora" src="https://via.placeholder.com/50" alt="Imagem Placeholder"/>
        <p className="agradecimentos_titulo">
            Agradecimentos
        </p>
        <div className="agradecimentos_nome">
            <p>Paulo César Castro</p>
            <p>Laura da Conceição</p>
            <p>&</p>
            <p>João Victor da Conceição Alves</p>
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