import React from 'react';
import { Card } from '../../components/card/Card';
import styles from './mainPage.module.scss';
import { chicken, fish, foieGras } from '../../cardsData';

export const MainPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ты сегодня покормил кота?</h2>
      <div className={styles.cards}>
        <Card {...foieGras} disabled />
        <Card {...fish} />
        <Card {...chicken} />
      </div>
    </div>
  );
};
