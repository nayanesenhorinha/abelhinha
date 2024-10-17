import React from 'react';
import chapters from '../control/chapters';

const Menu = ({ goToChapter }) => {
  return (
    <div className="page menu">
      <h2>Sumário</h2>
      <ul>
        {Object.entries(chapters).map(([chapterNumber, chapterData]) => (
          <li key={chapterNumber}>
            <button onClick={() => goToChapter(Number(chapterNumber))}>
              {`Capítulo ${chapterNumber}: ${chapterData.title}`} {/* Título do capítulo aqui */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

