import React, { useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import bookTitle from '../control/main';

const Chapter1 = ({ onPrev, onNext, goToMenu }) => {

  const chapterTitle = "O Buraco do Coelho";
  const chapterNumberName = "Capítulo 1"
  const chapterNumber = 1;
  bookTitle(chapterTitle);

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
