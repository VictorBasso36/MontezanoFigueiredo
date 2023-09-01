import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
import CardAtuacao from '../cards/cardAtuacao/caardAtuacao';
import CardServico from '../cards/cardServico';

export default function BannerDestaque() {
  return (
    <section className={styles.MainSection} >
        <div className={styles.Filter} style={{backgroundImage: 'url(/bannerinmage.webp)'}}></div>
        <div className={styles.MainCotainer}>
            <div className={styles.CardService}>
              <h2>PLANEJAMENTO ESTRATÉGICO</h2>
              <p><span>-</span>Estruturação patrimonial</p>
              <p><span>-</span>Reestruturação (Turnaround)</p>
              <p><span>-</span>Gestão financeira</p>
              <p><span>-</span>Gestão empresarial</p>
            </div>
            <div className={styles.CardCenter}>
              <p>Há anos acelerando o crescimento de grandes negócios, por meio da gestão tributária e planejamento estratégico</p>
            </div>
            <div className={styles.CardService}> 
              <h2>PLANEJAMENTO ESTRATÉGICO</h2>
              <p><span>-</span>Revisão Fiscal</p>
              <p><span>-</span>Recuperação de créditos</p>
              <p><span>-</span>Atuação contenciosa e consultiva</p>
              <p><span>-</span>Compliance Fiscal</p>
            </div>
        </div>
    </section>
  );
}