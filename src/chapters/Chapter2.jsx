import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import bookTitle from '../control/title';
import chapters from '../control/chapters';

const Chapter2 = ({
  onNext, 
  goToContents, 
  goToCover }) => {
  const chapterNumber = 2;

  const chapterTitle = chapters[chapterNumber].title;
  const chapterRoman = chapters[chapterNumber].chap;
  const chapterTexts = chapters[chapterNumber].texts;

  useEffect(() => {
    bookTitle(chapterTitle); 
    return () => {
      document.title = "As Aventuras de Alice no País das Maravilhas"; 
    };
  }, [chapterTitle]);

  return (
    <>
      <div className="page chapter_page">
        <span className="chapter_subtitle">{chapterRoman}</span>
        <h2 className="chapter_title">{chapterTitle}</h2>
        <img className="chapter_img_abertura" src="https://via.placeholder.com/25" alt="Imagem Placeholder"/>
        <div className="chapter_content">
          {chapterTexts.map((paragraph, index) => (
            <p className="chapter_text" key={index}>{paragraph}</p>
          ))}
          
          <img className="chapter_img" src="https://via.placeholder.com/200" alt="Imagem Placeholder"/>
        </div>
        
        <Navigation 
          goToCover={goToCover}  
          onNext={onNext} 
          goToContents={goToContents} />
      </div>
    </>
  );
};

export default Chapter2;
