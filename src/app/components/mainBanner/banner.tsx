"use client";
import Image from 'next/image'
import styles from './banner.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Banner() {
  const pathname = usePathname();
  return (
    <div className={styles.banner} >
        



        {/* TEXT AREAA */}
        {pathname === "/" &&     
        <> 
          <div className={styles.Content}>
              <h1>GESTÃO <strong>TRIBUTÁRIA</strong><span> &</span><br /> PLANEJAMENTO <strong>ESTRATÉGICO</strong></h1>
              <p className={styles.ContentP}>A Montezano Figueiredo é um Hub de inteligência que alinha a Gestão Tributária e Planejamento Estratégico.</p>
          </div>        
          <div className={styles.buttonArea} style={{zIndex: 2}}>
            <ButtonMain buttonLink='/Areas-de-Atuacao' buttonText='Serviços' />
            <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
          </div>
        </> 
        } 
        {pathname === "/Quem-Somos" &&   
        <>   
        <div className={styles.Content}>
            <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
            <h1>MONTEZANO <strong>FIGUEIREDO</strong></h1>
            <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
        </div>  
        <div className={styles.buttonArea} style={{zIndex: 2}}>
          <ButtonMain buttonLink='/Areas-de-Atuacao' buttonText='Serviços' />
          <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
        </div>
        </> 
        }
        {pathname === "/Areas-de-Atuacao" &&   
        <>  
          <div className={styles.Content}>
              <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
              <h1 className={styles.AtuacaoTipe}>SERVIÇOS <strong>PERSONALIZADOS</strong></h1>
              <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
          </div>  
          <div className={styles.buttonArea} style={{zIndex: 2}}>
            <ButtonMain buttonLink='/Areas-de-Atuacao#Servicos' buttonText='Serviços' />
            <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
          </div>
        </>  
        }
        {pathname === "/Conteudo" &&    
        <>  
          <div className={styles.Content}>
              <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
              <h1>PORTAL DE <strong>CONTEÚDO</strong></h1>
              <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
          </div>  
          <div className={styles.buttonArea} style={{zIndex: 2}}>
            <ButtonMain buttonLink='/Areas-de-Atuacao#Servicos' buttonText='Serviços' />
            <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
          </div>
        </> 
        } 
        {pathname === "/Contato" && 
        <>
          <div className={styles.Content}>
            <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
            <h1 className={styles.AtuacaoTipe}>CONTATO <strong>PESSOAL</strong></h1>
            <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
          </div>  
          <div className={styles.buttonAreaWhatsapp} style={{zIndex: 2}}>
            <a href="https://api.whatsapp.com/message/GE66DI4WCKWHJ1?autoload=1&app_absent=0" target="_blank">
              <button className={styles.whatsappbanner}>
                <p>Contato</p>
                <Image src={'/whatsapp.svg'} width={30} height={30} alt={''}/>
              </button>
            </a> 
          </div>
        </>
        }
        <div className={styles.BackgroundFilter} style={{backgroundImage: 'url("/bannerinmage.webp")'}}></div>
    </div>
  )
}
