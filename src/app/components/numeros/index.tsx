"use client";
import Image from 'next/image'
import styles from './index.module.css'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'
import CardBlog from '../cards/cardBlog';
import { gql, useQuery } from '@apollo/client';
export default function Numeros() {


  return (
    <section className={styles.MainWidth}>
       <div className={styles.NumerosContainer}>
            <h1>temos orgulho dos nossos numeros</h1>
       </div>
    </section>
    )
}
