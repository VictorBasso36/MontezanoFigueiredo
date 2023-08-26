import Image from 'next/image';
import styles from './cardService.module.css';
import React from 'react';
import ButtonSupport from '../../buttons/buttonSuport';
export default function CardServico() {
  return (
    <div className={styles.mainCard}>
      <div className={styles.headerCardTitle}>
        <div className={styles.HeaderCard}>
          <Image src="/simbolo-marrom.svg" width={45} height={45} alt={''}></Image>
          <h2>Direito Tributário</h2>
        </div>
        <div className={styles.DescriptionCard}>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
        </div>
        <div className={styles.ButtonArea}>
          <ButtonSupport buttonLink='' buttonText='Saiba +'  />
        </div>
      </div>
    </div>
  );
}