import React from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';

const Contents = ({ goToChapter, onPrev, onNext, goToCover }) => {
  return (
    <div className="page menu">
      <h2>Sumário</h2>
      <ul>
        {Object.entries(chapters).map(([chapterNumber, chapterData]) => (
          <li key={chapterNumber}>
            <button onClick={() => goToChapter(Number(chapterNumber)+3)}>
              {`${chapterNumber}: ${chapterData.title}`}
            </button>
          </li>
        ))}
      </ul>

      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} 
        goToCover={goToCover} 
      />
    </div>
  );
};

export default Contents;
