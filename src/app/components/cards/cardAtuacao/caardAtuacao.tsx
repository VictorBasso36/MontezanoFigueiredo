import Image from 'next/image';
import styles from './cardAtuacao.module.css';
import React from 'react';
import ButtonSupport from '../../buttons/buttonSuport';

interface props{
  linkWhatsApp: string;
}

export default function CardAtuacao({linkWhatsApp}:props) {
  return (
    <div className={styles.mainCard}>
        <div className={styles.Container}>
          <div className={styles.DescriptionCard}>
            <h2>Saiba mais sobre esse serviço com nossos especialistas.</h2>
          </div>
          <br />
          <a href={linkWhatsApp} target="_blank">
            <button>
              Fale conosco
            </button>
          </a>
        </div>
        
        <div className={styles.Filter} style={{backgroundImage: 'url(/bannerinmage.webp)'}}></div>
    </div>
  );
}