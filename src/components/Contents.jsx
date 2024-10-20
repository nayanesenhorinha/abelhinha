import React from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';

const Contents = ({ goToChapter , onPrev, onNext, goToContents }) => {
  return (
    <div className="page menu">
      <h2>Sumário</h2>
      <ul>
        {Object.entries(chapters).map(([chapterNumber, chapterData]) => (
          <li key={chapterNumber}>
            <button onClick={() => goToChapter(Number(chapterNumber))}>
              {`${chapterNumber}: ${chapterData.title}`} {/* Título do capítulo aqui */}
            </button>
          </li>
        ))}
      </ul>
      <Navigation onPrev={onPrev} onNext={onNext} goToContents={goToContents} />
    </div>
  );
};

export default Contents;

