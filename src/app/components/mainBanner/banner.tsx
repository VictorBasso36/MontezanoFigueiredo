"use client";
import Image from 'next/image'
import styles from './banner.module.css'
import { useEffect, useMemo, useState } from 'react'

export default function Banner() {

  return (
    <div className={styles.banner} >
        
        <div style={{zIndex: 2}}>
            <h1>GESTÃO <strong>TRIBUTÁRIA</strong>  <span>&</span><br /> <strong>PLANEJAMENTO ESTRATÉGICO</strong></h1>
            <p>A Montezano Figueiredo é um Hub de inteligência que alinha a Gestão Tributária e Planejamento Estratégico. </p>
            <div>

            </div>
        </div>
        <div className={styles.BackgroundFilter} style={{backgroundImage: 'url("/bannerinmage.webp")'}}></div>
    </div>
  )
}
