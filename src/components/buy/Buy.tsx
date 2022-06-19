import React from 'react';
import styles from './buy.module.scss';
import { IBuy } from './types';

export const Buy: React.FC<IBuy> = ({ onClick }) => {
  return (
    <>
      {'Чего сидишь? Порадуй котэ, '}
      <a
        className={styles.buy}
        onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          onClick();
        }}
      >
        купи.
      </a>
    </>
  );
};
