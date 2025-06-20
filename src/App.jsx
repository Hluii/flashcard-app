import React, { useState } from 'react';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import flashcardsData from './data/flashcards.json';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getRandomCard = () => {
    let newIndex = Math.floor(Math.random() * flashcardsData.length);
    while (newIndex === currentIndex && flashcardsData.length > 1) {
      newIndex = Math.floor(Math.random() * flashcardsData.length);
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="app">
      <Header title="Biology 101" description="Intro to Cell Biology" total={flashcardsData.length} />
      <Flashcard card={flashcardsData[currentIndex]} />
      <button onClick={getRandomCard}>Next Card</button>
    </div>
  );
}

export default App;
