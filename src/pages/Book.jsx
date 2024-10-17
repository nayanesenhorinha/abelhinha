import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; 
import Cover from '../components/Cover';
import Menu from '../components/Menu';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
// Continue importando os capítulos até Chapter25

const Book = () => {
  // Estado inicial definido para 0, mas ele será atualizado com a página salva no localStorage (se houver)
  const [currentPage, setCurrentPage] = useState(0);

  // Lista de páginas
  const pages = [
    <Cover onNext={() => setCurrentPageAndSave(1)} goToMenu={() => setCurrentPageAndSave('menu')} />,
    <Chapter1 onPrev={() => setCurrentPageAndSave(0)} onNext={() => setCurrentPageAndSave(2)} goToMenu={() => setCurrentPageAndSave('menu')} />,
    <Chapter2 onPrev={() => setCurrentPageAndSave(1)} onNext={() => setCurrentPageAndSave(3)} goToMenu={() => setCurrentPageAndSave('menu')} />,
    // Continue adicionando os capítulos na ordem desejada
  ];

  // Função para salvar o progresso no localStorage
  const saveProgress = (page) => {
    localStorage.setItem('currentPage', page);
  };

  // Função para atualizar o estado da página e salvar o progresso
  const setCurrentPageAndSave = (page) => {
    setCurrentPage(page);
    saveProgress(page);
  };

  // Restaura o progresso do leitor ao carregar o componente
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(savedPage === 'menu' ? 'menu' : parseInt(savedPage, 10));
    }
  }, []);

  // Função para ir ao capítulo a partir do menu
  const goToChapter = (pageIndex) => {
    setCurrentPageAndSave(pageIndex);
  };

  // Funções de swipe (deslizar) para mudar de capítulo
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

  // Configurações de swipe
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
