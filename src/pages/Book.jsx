import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // Importa a biblioteca para detectar os gestos
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

  // Configurações de swipe usando `react-swipeable`
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,  // Deslizar para a esquerda avança para a próxima página
    onSwipedRight: handleSwipeRight, // Deslizar para a direita volta para a página anterior
    preventDefaultTouchmoveEvent: true, // Previne o scroll vertical
    trackMouse: true // Permite que o mouse também seja usado para swipe (opcional)
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
