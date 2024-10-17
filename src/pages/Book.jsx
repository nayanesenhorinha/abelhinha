import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; 
import Cover from '../components/Cover';
import Menu from '../components/Menu';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
// Continue importando os capítulos até Chapter25

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <Cover onNext={() => setCurrentPage(1)} goToMenu={() => setCurrentPage('menu')} />,
    <Chapter1 onPrev={() => setCurrentPage(0)} onNext={() => setCurrentPage(2)} goToMenu={() => setCurrentPage('menu')} />,
    <Chapter2 onPrev={() => setCurrentPage(1)} onNext={() => setCurrentPage(3)} goToMenu={() => setCurrentPage('menu')} />,
    // Continue adicionando os capítulos na ordem desejada
  ];

  const goToChapter = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSwipeLeft = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
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
        <Menu goToChapter={goToChapter} />
      ) : (
        <div {...swipeHandlers}>
          {pages[currentPage]}
        </div>
      )}
    </>
  );
};

export default Book;
