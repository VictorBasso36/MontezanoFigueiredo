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
      <p>Temos <span>orgulho</span> dos</p>
        <h2>NOSSOS <strong>NÚMEROS</strong></h2>
       <div>
        
       </div>
       <div className={styles.NumerosContainer}>
            <CreditBanner description='Ultrapassar o comum e acelerar o crescimento do seu negócio é nosso objetivo, adotando um olhar estratégico para tributos e processos. A Montezano te mostra o caminho.' title='Somos um escritório de soluções:' url={`convert_27d47659e0.PNG`}/>
       </div>
    </section>
    )
}
