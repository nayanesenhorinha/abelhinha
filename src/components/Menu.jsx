import React from 'react';

const Menu = ({ goToChapter }) => {
  const chapters = Array.from({ length: 25 }, (_, i) => `Capítulo ${i + 1}`);
  
  return (
    <div className="page menu">
      <h2>Sumário</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index}>
            <button onClick={() => goToChapter(index + 1)}>{chapter}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
