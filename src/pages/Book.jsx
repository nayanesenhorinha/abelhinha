import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; 
import Cover from '../components/Cover';
import Infos1 from '../components/Infos1';
import Infos2 from '../components/Infos2';
import Contents from '../components/Contents';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const setCurrentPageAndSave = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page); 
    }
  };
  
  const pages = [
    <Cover onNext={() => setCurrentPageAndSave(1)} goToContents={() => setCurrentPageAndSave('menu')} />,
    <Infos1 onPrev={() => setCurrentPageAndSave(0)} onNext={() => setCurrentPageAndSave(2)} goToContents={() => setCurrentPageAndSave('menu')} goToCover={() => setCurrentPageAndSave(0)} 
/>,
    <Infos2 onPrev={() => setCurrentPageAndSave(1)} onNext={() => setCurrentPageAndSave(3)} goToContents={() => setCurrentPageAndSave('menu')} goToCover={() => setCurrentPageAndSave(0)} 
/>,
    <Contents onPrev={() => setCurrentPageAndSave(2)} onNext={() => setCurrentPageAndSave(4)} goToContents={() => setCurrentPageAndSave('menu')}  goToChapter={() => setCurrentPageAndSave('menu')}   goToCover={() => setCurrentPageAndSave(0)} 
/>,
    <Chapter1 onPrev={() => setCurrentPageAndSave(3)} onNext={() => setCurrentPageAndSave(5)} goToContents={() => setCurrentPageAndSave('menu')}   goToCover={() => setCurrentPageAndSave(0)} 
/>,
    <Chapter2 onPrev={() => setCurrentPageAndSave(4)} onNext={() => setCurrentPageAndSave(6)} goToContents={() => setCurrentPageAndSave('menu')}   goToCover={() => setCurrentPageAndSave(0)} 
/>,
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

  //goToCover={() => setCurrentPageAndSave(0)}

  const goToCover = () => {
    setCurrentPageAndSave(0);
  };

  const goToChapter = (pageIndex) => {
    setCurrentPageAndSave(pageIndex);
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
    onSwipedLeft: () => currentPage !== 'menu' && handleSwipeLeft(),
    onSwipedRight: () => currentPage !== 'menu' && handleSwipeRight(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  
  return (
    <>
      {currentPage === 'menu' ? (
      <Contents 
        goToChapter={(pageIndex) => setCurrentPageAndSave(pageIndex)} 
        onPrev={() => setCurrentPageAndSave(currentPage - 1)} 
        onNext={() => setCurrentPageAndSave(currentPage + 1)} 
        goToContents={() => setCurrentPageAndSave('menu')}
        
      />
      ) : (
        <div {...swipeHandlers}>
          {pages[currentPage]}
        </div>
      )}
    </>
  );
};

export default Book;
