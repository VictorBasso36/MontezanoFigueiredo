"use client";
import Image from 'next/image'
import styles from './modal.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SocialMidiaIcon from '../socialMidiaIcons';

export default function ModalConvert() {

  return (
    <div className={styles.main} >
        <p className={styles.ptitle}><strong>-</strong>Deixe um <span>mensagem</span> para nosso time<strong>-</strong></p>
        <h2>QUAIS DESAFIOS A SUA EMPRESA VEM ENFRENTANDO <strong>ATUALMENTE ?</strong></h2>
        <p className={styles.ptitle2}>Conte com os nossos especialistas para obter um diagnóstico cortesia exclusivo que revelará oportunidades capazes de deixar a sua empresa à frente da concorrência.</p>
        <div className={styles.ContentHere}>
            <div className={styles.formHere}>
                <form action="">
                    <input type="text" placeholder='Nome:' />
                    <input type="email" placeholder='E-mail:' />
                    <input type="tel" placeholder='Telefone:' />
                    <input type="text" placeholder='CNPJ ou CPF:' />
                    <textarea placeholder='Deixe sua mensagem:'/><br />
                    <button className={styles.buttonmain} type='submit'>ENVIAR</button>
                </form>
            </div>
            <div className={styles.ContatArea}>
                <div className={styles.ContatAreaCard}>
                    <h3>Contatos</h3>
                    <button className={styles.buttonmain}>Contato <Image src={'/whatsapp.svg'} style={{marginLeft: '20px'}} width={30} height={30} alt={''}/></button>
                    <a href="tel:">+55 (11) 4314-1360</a>
                    <a href="">
                        Rua Dr. Eduardo de Souza Aranha, 387 15º andar CJ 152 - Itaim Bibi - São Paulo.
                    </a>
                </div>
                <div className={styles.SocialMidiaCard}>
                    <h3>Social Media</h3>
                    <SocialMidiaIcon transformScale={1.3}/>
                </div>
            </div>
        </div>
    </div>
  )
}
