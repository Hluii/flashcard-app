import React from 'react';
import styles from './Header.module.css';

function Header({ title, description, total }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Total Cards: {total}</p>
    </div>
  );
}

export default Header;