import React, { useState } from 'react';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import flashcardsData from './data/flashcards.json';
import styles from './App.module.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredCards = selectedCategory === 'all'
    ? flashcardsData
    : flashcardsData.filter(card => card.category === selectedCategory);

  const [currentIndex, setCurrentIndex] = useState(0);

  const getRandomCard = () => {
    let newIndex = Math.floor(Math.random() * filteredCards.length);
    while (newIndex === currentIndex && filteredCards.length > 1) {
      newIndex = Math.floor(Math.random() * filteredCards.length);
    }
    setCurrentIndex(newIndex);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentIndex(0);
  };

  return (
    <div className={styles.appContainer}>
      <Header title="Flashcard Practice" description="Practice your knowledge across subjects" total={filteredCards.length} />

      <select onChange={handleCategoryChange} value={selectedCategory} className={styles.dropdown}>
        <option value="all">All</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="math">Math</option>
        <option value="geography">Geography</option>
        <option value="literature">Literature</option>
      </select>

      <Flashcard card={filteredCards[currentIndex]} />
      <button onClick={getRandomCard}>Next Card</button>
    </div>
  );
}

export default App;