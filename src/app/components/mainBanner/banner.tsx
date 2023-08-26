"use client";
import Image from 'next/image'
import styles from './banner.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';
import { usePathname } from 'next/navigation';

export default function Banner() {
  const pathname = usePathname();
  return (
    <div className={styles.banner} >
        



        {/* TEXT AREAA */}
        {pathname === "/" &&       
        <div className={styles.Content}>
            <h1>GESTÃO <strong>TRIBUTÁRIA</strong><span> &</span><br /> PLANEJAMENTO <strong>ESTRATÉGICO</strong></h1>
            <p className={styles.ContentP}>A Montezano Figueiredo é um Hub de inteligência que alinha a Gestão Tributária e Planejamento Estratégico.</p>

        </div>  
        }
        {pathname === "/Quem-Somos" &&       
        <div className={styles.Content}>
            <p><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
            <h1>MONTEZANO <strong>FIGUEIREDO</strong></h1>
            <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
        </div>  
        } 
        {/* ///////////////////////////////////// */}
        {pathname === "/Areas-de-Atuacao" &&       
        <div className={styles.Content}>
            <p><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
            <h1>SERVIÇOS <strong>PERSONALIZADOS</strong></h1>
            <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
        </div>  
        }
        {pathname === "/Areas-de-Atuacao" &&  
        <div className={styles.buttonArea} style={{zIndex: 2}}>
           <ButtonMain buttonLink='/Areas-de-Atuacao#Servicos' buttonText='Serviços' />
           <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça +' />
        </div>
        }
        {/* ///////////////////////////////////// */}
        {pathname === "/Conteudo" &&       
        <div className={styles.Content}>
            <p><strong>-</strong>DEFINIR TEXTO<strong>-</strong></p>
            <h1>PORTAL DE <strong>CONTEÚDO</strong></h1>
            <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
        </div>  
        } 


        {/* BUTTONS AREA */}
        {pathname === "/" &&         
        <div className={styles.buttonArea} style={{zIndex: 2}}>
          <ButtonMain buttonLink='/Areas-de-Atuacao' buttonText='Serviços' />
          <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça +' />
        </div>
        } 

        {pathname === "/Contato" &&         
        <div className={styles.buttonArea} style={{zIndex: 2}}>
          
        </div>
        } 

        {pathname === '/Quem-Somos' &&         
        <div className={styles.buttonArea} style={{zIndex: 2}}>
          
          
          
        </div>
        } 


        {pathname === "/Conteudo" &&         
        <div className={styles.buttonArea} style={{zIndex: 2}}>
          
        </div>
        } 
        <div className={styles.BackgroundFilter} style={{backgroundImage: 'url("/bannerinmage.webp")'}}></div>
    </div>
  )
}
