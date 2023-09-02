"use client";
import Image from 'next/image'
import styles from '../../creditBannner/index.module.css'
import { useEffect, useMemo, useState } from 'react'


interface PropsOfCredit{
    title: string;
    description: string;
    url: string;
    social: string
}

export default function CreditEquipeBanner( {title, description, url, social}:PropsOfCredit) {

  
  return (
    <section className={styles.CreditBanner}>
        <div className={styles.Container}>
            <div className={styles.PhotoHere} style={{backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${url}`}}>

            </div>
            <div className={styles.ContentHere} style={{backgroundColor: 'white'}}>
                <h2 style={{color: 'var(--suportColor)'}}>
                    {title}
                </h2>
                <p style={{color: 'var(--mainColor)'}}>
                    {description}
                </p>
                <a href={social} target='_blank'>
                    <button>
                     Saiba +
                    </button>
                </a>
                
            </div>

        </div>
    </section>
  )
}
