import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import '../styles/ebook.css';
import bookTitle from '../control/main';

const Contents = ({ goToChapter, onPrev, onNext, goToCover }) => {

  const chapterTitle = "Sumário";

  useEffect(() => {
    bookTitle(chapterTitle); 
      return () => {
          document.title = "As Aventuras de Alice no País das Maravilhas"; 
      };
      }, [chapterTitle]);

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
