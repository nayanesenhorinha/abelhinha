import React from 'react';
import NavigationButtons from '../components/NavigationButtons';
import bookTitle from '../control/main';

const Chapter2 = ({ onPrev, onNext, goToMenu }) => {

  const chapterTitle = "A lagoa de lágrimas";
  const chapterNumberName = "Capítulo 2"
  const chapterNumber = 2;
  bookTitle(chapterTitle);

  return (
    <div className="page chapter">
      <h2>{chapterTitle}</h2>
      <p>
        Este é o conteúdo do capítulo 2. O conteúdo completo ficará aqui, podendo ser estilizado
        conforme necessário.
      </p>
      <NavigationButtons onPrev={onPrev} onNext={onNext} goToMenu={goToMenu} />
    </div>
  );
};

export default Chapter2;
