import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <p className={styles.discription}>
        К сожалению данная старница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
