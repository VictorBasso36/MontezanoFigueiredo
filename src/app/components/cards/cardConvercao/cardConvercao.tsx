import Image from 'next/image';
import styles from './cardConvercao.module.css';
import React from 'react';
import ButtonSupport from '../../buttons/buttonSuport';
export default function CardConvercao() {
  return (
    <div className={styles.mainCard}>
        <div className={styles.DescriptionCard}>
            <h2>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</h2>
        </div>
        <ButtonSupport buttonText='Áreas de atuação' buttonLink='' />
    </div>
  );
}