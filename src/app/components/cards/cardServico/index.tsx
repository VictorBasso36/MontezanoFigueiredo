import Image from 'next/image';
import styles from './cardService.module.css';
import React from 'react';
import ButtonSupport from '../../buttons/buttonSuport';

interface CardServicoProps {
  id: string;
  title: string;
  description: string;
}

export default function CardServico({
  id,
  title,
  description,
}:CardServicoProps) {
  return (
    <div className={styles.mainCard}>
      <div className={styles.headerCardTitle}>
        <div className={styles.HeaderCard} style={{marginBottom: '20px'}}>

          <Image src={'/simbolo-marrom.svg'} width={45} height={45} alt={''}></Image>
          <h2>{title}</h2>
          <div className={styles.DescriptionCard}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.ButtonArea}>
          <ButtonSupport buttonLink={id} buttonText='Saiba +'  />
        </div>
      </div>
    </div>
  );
}