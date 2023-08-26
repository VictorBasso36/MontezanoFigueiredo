"use client";
import Image from 'next/image'
import styles from './convert.module.css'
import { useEffect, useMemo, useState } from 'react'
import ButtonSupport from '../buttons/buttonSuport';
import ButtonMain from '../buttons/buttonMain';

export default function Convert() {

  
  return (
    <div className={styles.Convert}>
        <div className={styles.ConvertContainer}>
            <div className={styles.TitleContainer}>
                <p>impulsione o seu negócio</p><br />
                <h5>INOVAÇÃO EMPRESÁRIAL E <strong>TRIBUTÁRIA</strong></h5> 
            </div>
            <div className={styles.ConvertDescription}>
                <p>A trajetória do empresário é longa e cheia de obstáculos, mas não precisa ser instável, nosso objetivo é mostrar o melhor caminho. <a href=""><strong>Vem conosco ?</strong></a></p>
            </div>
            <div className={styles.buttonArea}>
                <a href="">
                    <button>
                        <p>Contato Imediato </p> 
                    </button>
                </a>
                <a href=""><p className={styles.TenhoUmDuvida}>Tenho Uma Dúvida</p></a>
            </div>

            
        </div>
        <div className={styles.filter} style={{backgroundImage: 'url("/bannerinmage.webp")'}}></div>
    </div>
  )
}
