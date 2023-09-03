"use client";
import Image from 'next/image'
import styles from './index.module.css'
import { useEffect, useMemo, useState } from 'react'


interface PropsOfCredit{
    title: string;
    description: string;
    url: string;
    social: string;
}

export default function CreditBanner( {title, description, url, social}:PropsOfCredit) {

  
  return (
    <section className={styles.CreditBanner}>
        <div className={styles.Container}>
            <div className={styles.PhotoHere} style={{backgroundImage: `url(https://montezano.bassodev.com.br/uploads/${url})`}}>

            </div>
            <div className={styles.ContentHere}>
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
                <a href={social}>
                    <button>
                        Tire suas duvidas !
                    </button>
                </a>
            </div>

        </div>
    </section>
  )
}
