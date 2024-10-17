import React, { useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import bookTitle from '../control/main';
import chapters from '../control/chapters';

const Chapter1 = ({ onPrev, onNext, goToMenu }) => {
  const chapterNumber = 1;

  const chapterTitle = chapters[chapterNumber].title;
  const chapterNumberName = `Capítulo ${chapterNumber}`;
  
  useEffect(() => {
    bookTitle(chapterTitle); 
    return () => {
      document.title = "As Aventuras de Alice no País das Maravilhas"; 
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter">
      <h2>{chapterTitle}</h2>
      <p>
        Este é o conteúdo do capítulo 1. O conteúdo completo ficará aqui, podendo ser estilizado
        conforme necessário.
      </p>
      <NavigationButtons onPrev={onPrev} onNext={onNext} goToMenu={goToMenu} />
    </div>
  );
};

export default Chapter1;
