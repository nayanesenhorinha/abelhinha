import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; 
import Cover from '../components/Cover';
import Infos1 from '../components/Infos1';
import Infos2 from '../components/Infos2';
import Contents from '../components/Contents';
import Chapter1 from '../chapters/Chapter1';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const setCurrentPageAndSave = (page) => {
    setCurrentPage(page);
    saveProgress(page);
  };
  // Lista de páginas
  const pages = [
    <Cover onNext={() => setCurrentPageAndSave(1)} goToContents={() => setCurrentPageAndSave('menu')} />,
    <Infos1 onPrev={() => setCurrentPageAndSave(0)} onNext={() => setCurrentPageAndSave(2)} goToContents={() => setCurrentPageAndSave('menu')} />,
    <Infos2 onPrev={() => setCurrentPageAndSave(1)} onNext={() => setCurrentPageAndSave(3)} goToContents={() => setCurrentPageAndSave('menu')} />,
    <Contents onPrev={() => setCurrentPageAndSave(2)} onNext={() => setCurrentPageAndSave(4)} goToContents={() => setCurrentPageAndSave('menu')} />,
    <Chapter1  onPrev={() => setCurrentPageAndSave(3)} onNext={() => setCurrentPageAndSave(5)} goToContents={() => setCurrentPageAndSave('menu')} />,

    // Continue adicionando os capítulos na ordem desejada
  ];

  const saveProgress = (page) => {
    localStorage.setItem('currentPage', page);
  };

  

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(savedPage === 'menu' ? 'menu' : parseInt(savedPage, 10));
    }
  }, []);

  const goToChapter = (pageIndex) => {
    setCurrentPageAndSave(pageIndex + 3); // Adjust the index to account for the initial static pages
  };

  const handleSwipeLeft = () => {
    if (currentPage < pages.length - 1 && currentPage !== 'menu') {
      setCurrentPageAndSave(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPage > 0 && currentPage !== 'menu') {
      setCurrentPageAndSave(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,  
    onSwipedRight: handleSwipeRight, 
    preventDefaultTouchmoveEvent: true, 
    trackMouse: true 
  });

  return (
    <>
      {currentPage === 'menu' ? (
        <Contents goToChapter={goToChapter} />
      ) : (
        <div {...swipeHandlers}>
          {pages[currentPage]}
        </div>
      )}
    </>
  );
};

export default Book;
