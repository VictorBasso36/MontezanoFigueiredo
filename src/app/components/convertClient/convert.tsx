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
                <p>Impulsione o seu negócio</p><br />
                <h5>INOVAÇÃO EMPRESÁRIAL E <strong>TRIBUTÁRIA</strong></h5> 
            </div>
            <div className={styles.ConvertDescription}>
                <p>A trajetória do empresário é longa e cheia de obstáculos, mas não precisa ser instável, nosso objetivo é mostrar o melhor caminho. <a href="https://api.whatsapp.com/message/GE66DI4WCKWHJ1?autoload=1&app_absent=0"><strong>Vem conosco ?</strong></a></p>
            </div>
            <div className={styles.buttonArea}>
                <a href="/Contato" target='_blank'>
                    <button>
                        
                        <p>Contato </p> 
                        <Image src={'/whatsapp.svg'} width={30} height={30} alt={''}/>
                    </button>
                </a>
                <a href="/Contato"><p className={styles.TenhoUmDuvida}>Tenho Uma Dúvida</p></a>
            </div>

            
        </div>
        <div className={styles.filter} style={{backgroundImage: 'url("/bannerinmage.webp")'}}></div>
    </div>
  )
}
