import React from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import '../styles/ebook.css';

const Contents = ({ goToChapter, onPrev, onNext, goToCover }) => {
  return (
    <div className="page menu">
      <h2 className="menu_titulo">Sumário</h2>
      <ul className="menu_lista">
        <li className="lista-item"> 
          <button onClick={() => goToChapter(0)}>
            Capa
          </button>
        </li>
        <li className="lista-item">
          <button onClick={() => goToChapter(3)}>
            Créditos
          </button>
        </li>
        <p className="menu_topico">
          Aventuras de Alice
        </p>
        {Object.entries(chapters).map(([chapterNumber, chapterData]) => (
          <li key={chapterNumber}>
            
            <button className="lista-item" onClick={() => goToChapter(Number(chapterNumber)+3)}>
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
