import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
import CardAtuacao from '../cards/cardAtuacao/caardAtuacao';
import CardServico from '../cards/cardServico';

export default function BannerDestaque() {
  return (
    <section className={styles.MainSection}>
        <div className={styles.MainCotainer}>
            PLANEJAMENTO ESTREATEGICO ABNNER
        </div>
    </section>
  );
}