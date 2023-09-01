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
       <div className={styles.NumerosContainer}>
            <CreditBanner description='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.' title='Lorem Ipsum é uma sequencia  tipográfica de textos.' url={`url('https://montezano.bassodev.com.br/uploads/convert_27d47659e0.PNG')`}/>
       </div>
    </section>
    )
}
