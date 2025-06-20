import React, { useState } from 'react';
import styles from './Flashcard.module.css';

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  const categoryColors = {
    science: 'rgba(212, 241, 244, 0.85)',
    history: 'rgba(255, 229, 180, 0.85)',
    math: 'rgba(226, 240, 203, 0.85)',
    geography: 'rgba(173, 216, 230, 0.85)',
    literature: 'rgba(240, 200, 220, 0.85)',
    default: 'rgba(244, 244, 244, 0.85)'
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