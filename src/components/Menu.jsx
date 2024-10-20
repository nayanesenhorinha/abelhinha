import React from 'react';
import chapters from '../control/chapters';
import NavigationButtons from '../components/NavigationButtons';


const Menu = ({ goToChapter , onPrev, onNext, goToMenu }) => {
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
      <NavigationButtons onPrev={onPrev} onNext={onNext} goToMenu={goToMenu} />
    </div>
  );
};

export default Menu;

