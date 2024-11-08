import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import bookTitle from '../control/title';

const Contents = ({ 
  goToChapter, 
  onNext, 
  goToCover }) => {

  const chapterTitle = "Sumário";

  useEffect(() => {
    bookTitle(chapterTitle); 
      return () => {
          document.title = "As Aventuras de Alice no País das Maravilhas"; 
      };
      }, [chapterTitle]);

  return (
    <div className="page menu">
      <img 
        className="icone_cabeco" 
        src="https://via.placeholder.com/25" 
        alt="Imagem Placeholder"/>

      <div className="menu_sumario">
        <div className="menu_item">
          <div className="menu_item_num">
            0
          </div>
          <button 
            className="menu_item_nom" 
            onClick={() => goToChapter(0)}>
            Capa
          </button>
        </div>

        <div className="menu_item">
          <div className="menu_item_num">
            3
          </div>
          <button 
            className="menu_item_nom" 
            onClick={() => goToChapter(3)}>
            Créditos
          </button>
        </div>

        {Object.entries(chapters).map(([chapterNumber, chapterData], index) => (
          <div className="menu_item" key={chapterNumber}>
            <div className="menu_item_num">
              {Number(chapterNumber)}
            </div>
            <button 
            className="menu_item_nom" 
            onClick={() => goToChapter(Number(chapterNumber) + 4)}>
            {chapterData.title}
            </button>
          </div>
        ))}
      </div>

      <Navigation 
        onNext={onNext} 
        goToCover={goToCover} 
      />
    </div>
  );
};

export default Contents;
