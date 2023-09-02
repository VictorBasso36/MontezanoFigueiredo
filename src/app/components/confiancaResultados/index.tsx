import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
export default function Confiaca() {
  return (
    <section className={styles.mainSection}>
        <div className={styles.ResutadoContainer}>
          <div className={styles.ContainerResultados}>
            <p>Confiança vem dos</p>
            <h2>
              RESULTADOS
            </h2>
            <p>E RELACIONAMENTOS</p>
            <p className={styles.ResultadoDescription}>
              A Montezano Figueiredo é um <span>Hub de inteligência</span> que alinha a Gestão Tributária e Planejamento Estratégico. 
            </p>
            <a href="" target='_blank'>
              <button>
                <p>Conheça +</p>
              </button>
            </a>
          </div>
          <div className={styles.Swiper}>
              <div className={styles.SwiperHere}>
                  <div className={styles.SwiperCard}>
                    swiper here
                  </div>
              </div>
              <div className={styles.ButtonHere}>
                  buytton Here
              </div>
          </div>
        </div>  
    </section>
  );
}