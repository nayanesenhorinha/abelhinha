import React from 'react';
import Navigation from './Navigation';
import '../styles/ebook.css';

const Cover = ({ onNext, goToContents }) => {

  return (
    <div className="page cover">
      <h1>Capa do E-book</h1>
      <Navigation onNext={onNext} goToContents={goToContents} />
    </div>
  );
};

export default Cover;
