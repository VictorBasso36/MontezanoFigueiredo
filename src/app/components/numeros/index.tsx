"use client";
import Image from 'next/image'
import styles from './index.module.css'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'
import CardBlog from '../cards/cardBlog';
import { gql, useQuery } from '@apollo/client';
import CreditBanner from '../creditBannner';
export default function Numeros() {


  return (
    <section className={styles.MainWidth}>
        <p><strong>-</strong> Temos <span>orgulho</span> dos <strong>-</strong></p>
        <h2 className={styles.MainTitlemuber}>NOSSOS <strong>NÚMEROS</strong></h2>
       <div className={styles.numbersHere}>
          <div className={styles.NumebrCard}>
            <h2><span>+</span>15mi</h2>
            <p>De créditos tributários recuperados.</p>
          </div>
          <div className={styles.NumebrCard}>
            <h2><span>+</span>850mi</h2>
            <p>De débitos anulados.</p>
          </div>
          <div className={styles.NumebrCard}>
            <h2><span>+</span>20anos</h2>
            <p>De experiência e atuação.</p>
          </div>
       </div>
       <div className={styles.NumerosContainer}>
            
       </div>
       <CreditBanner social='/Contato' description='Ultrapassar o comum e acelerar o crescimento do seu negócio é nosso objetivo, adotando um olhar estratégico para tributos e processos. A Montezano te mostra o caminho.' title='Somos um escritório de soluções:' url={`convert_27d47659e0.PNG`}/>
    </section>
    )
}
