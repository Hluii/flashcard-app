import React, { useState } from 'react';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import flashcardsData from './data/flashcards.json';
import styles from './App.module.css';

function App() {
  const [cards, setCards] = useState([...flashcardsData]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [mastered, setMastered] = useState([]);

  const currentCard = cards[currentIndex];

  const handleAnswerSubmit = () => {
    const normalizedInput = userAnswer.trim().toLowerCase();
    const normalizedAnswer = currentCard.answer.trim().toLowerCase();
    const isCorrect = normalizedAnswer.includes(normalizedInput);

    if (isCorrect) {
      setFeedback('correct');
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
    } else {
      setFeedback('incorrect');
      setStreak(0);
    }
  };

  const goToNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setFeedback(null);
    }
  };

  const goToPreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setUserAnswer('');
      setFeedback(null);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setUserAnswer('');
    setFeedback(null);
  };

  const markAsMastered = () => {
    const updatedMastered = [...mastered, currentCard];
    const remaining = cards.filter((_, i) => i !== currentIndex);
    setMastered(updatedMastered);
    setCards(remaining);
    setCurrentIndex(0);
    setUserAnswer('');
    setFeedback(null);
  };

  return (
    <div className={styles.appContainer}>
      <Header
        title="Flashcard Mastery"
        description="Practice your knowledge across subjects"
        total={cards.length}
      />

      <Flashcard card={currentCard} />

      <input
        type="text"
        placeholder="Type your answer..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className={styles.inputBox}
      />
      <button onClick={handleAnswerSubmit}>Submit</button>
      {feedback && (
        <p className={feedback === 'correct' ? styles.correct : styles.incorrect}>
          {feedback === 'correct' ? 'Correct!' : 'Incorrect. Try again!'}
        </p>
      )}

      <div className={styles.navigation}>
        <button onClick={goToPreviousCard} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextCard} disabled={currentIndex === cards.length - 1}>
          Next
        </button>
      </div>

      <button onClick={shuffleCards}>Shuffle</button>
      <button onClick={markAsMastered}>Mark as Mastered</button>

      <p>Streak: {streak} | Best: {bestStreak}</p>
    </div>
  );
}

export default App;