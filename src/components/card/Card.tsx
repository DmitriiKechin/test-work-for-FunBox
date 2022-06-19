import React, { useRef, useState } from 'react';
import styles from './card.module.scss';
import catPhoto from '../../images/Photo.png';
import { ICard } from './types';
import { Buy } from '../buy/Buy';

export const Card: React.FC<ICard> = props => {
  const [isSelect, setIsSelect] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isOut, setIsOut] = useState(true);
  const timer = useRef<string | number | NodeJS.Timeout | undefined>(undefined);

  const clickHandler = () => {
    if (props.disabled) {
      return;
    }

    setIsSelect(prev => !prev);
    setIsOut(false);
    setIsHover(false);
  };

  const howerHandler = () => {
    if (props.disabled) {
      return;
    }

    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (isOut) {
      setIsHover(true);
    }
  };

  const outHowerHandler = () => {
    if (props.disabled) {
      return;
    }

    timer.current = setTimeout(() => {
      setIsOut(true);
      setIsHover(false);
    }, 150);
  };

  const modifier = (className: string): string => {
    const classNameOut: Array<string> = [styles[className]];

    if (isHover && !isSelect) {
      classNameOut.push(styles[className + '__hover']);
    }

    if (isSelect) {
      classNameOut.push(styles[className + '__selected']);
    }

    if (isSelect && isHover) {
      classNameOut.push(styles[className + '__selected-hover']);
    }

    if (props.disabled) {
      classNameOut.push(styles[className + '__disabled']);
    }

    return classNameOut.join(' ');
  };

  const tagline =
    isSelect && isHover ? 'Котэ не одобряет?' : 'Сказочное заморское яство';

  const slogan = props.disabled ? (
    props.sloganDisabled
  ) : isSelect ? (
    props.sloganSelected
  ) : (
    <Buy onClick={clickHandler} />
  );

  return (
    <div className={styles.wrapper}>
      <div
        className={modifier('card')}
        onClick={clickHandler}
        onMouseOver={howerHandler}
        onMouseOut={outHowerHandler}
      >
        <div className={modifier('tagline')}>{tagline}</div>
        <h3 className={modifier('title')}>Нямушка</h3>
        <div className={modifier('taste')}>{props.taste}</div>
        <div className={modifier('description')}>{props.description}</div>
        <div className={modifier('image')}>
          <img
            className={styles.image__content}
            src={catPhoto}
            alt="фото товара"
          />
        </div>
        <div className={modifier('weight')}>
          <div className={modifier('weight__value')}>{props.weight}</div>
          <div className={modifier('styles.weight__measure')}>кг</div>
        </div>
      </div>
      <div className={modifier('slogan')}>{slogan}</div>
    </div>
  );
};
