import React from 'react';
import NavigationButtons from '../components/NavigationButtons';

const Cover = ({ onNext, goToMenu }) => {

  return (
    <div className="page">
      <h1>Capa do E-book</h1>
      <NavigationButtons onNext={onNext} goToMenu={goToMenu} />
    </div>
  );
};

export default Cover;
