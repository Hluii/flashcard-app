import React, { useState } from 'react';
import styles from './Flashcard.module.css';

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  const categoryColors = {
    science: '#d4f1f4',
    history: '#ffe5b4',
    math: '#e2f0cb',
    default: '#f4f4f4'
  };

  const cardColor = categoryColors[card.category] || categoryColors.default;

  return (
    <div className={styles.flashcardContainer} onClick={toggleFlip}>
      <div
        className={`${styles.flashcardInner} ${isFlipped ? styles.flipped : ''}`}
        style={{ backgroundColor: cardColor }}
      >
        <div className={styles.flashcardFront}>
          {card.question}
        </div>
        <div className={styles.flashcardBack}>
          {card.answer}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
