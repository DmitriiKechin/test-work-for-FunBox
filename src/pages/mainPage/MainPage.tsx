import React from 'react';
import styles from './mainPage.module.scss';

export const MainPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>Test</div>
      <div className={styles.text2}>Test</div>
      <div className={styles.text3}>Test</div>
    </div>
  );
};
