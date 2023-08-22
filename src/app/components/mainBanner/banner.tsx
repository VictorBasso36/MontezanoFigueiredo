"use client";
import Image from 'next/image'
import styles from './banner.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';


interface BannerProps {
  title: string;
  convertText: string;
}
export default function Banner({ title, convertText }: BannerProps) {

  return (
    <div className={styles.banner} >
        
        <div className={styles.Content}>
            <pre style={{ fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }} dangerouslySetInnerHTML={{ __html: title }}></pre>
            <p className={styles.ContentP}> { convertText }</p>

        </div>            
        <div className={styles.buttonArea} style={{zIndex: 2}}>
          <ButtonMain buttonLink='/Servicos' buttonText='Serviços' />
          <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça +' />
        </div>
        <div className={styles.BackgroundFilter} style={{backgroundImage: 'url("/bannerinmage.webp")'}}></div>
    </div>
  )
}
