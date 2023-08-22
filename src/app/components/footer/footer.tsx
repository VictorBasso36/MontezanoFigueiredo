"use client";
import Image from 'next/image'
import styles from './footer.module.css'
import { useEffect, useMemo, useState } from 'react'

export default function Footer() {

  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image src="/logoFooter.svg" width={250} height={250} alt={''}></Image>
        <div className={styles.footerContent}>
          <div className={styles.contentBlock}>
              <h6>GRUPO MF</h6>
              <ul>
                <li><a href="">Sobre nós</a></li>
                <li><a href="">Notícias</a></li>
                <li><a href="">Contato</a></li>
              </ul>
          </div>
          <div className={styles.contentBlock}>
              <h6>CONTATO</h6>
              <ul>
                <li><a href="">+55 (11) 4314-1360</a></li>
                <li><a href="">Rua Dr. Eduardo de Souza Aranha, 387 15º andar CJ 152 - Itaim Bibi - São Paulo.</a></li>
              </ul>
          </div>
          <div className={styles.contentBlock}>
              <h6>CONTÉUDO</h6>
              <ul>
                <li><a href="">Últimas Notícias</a></li>
                <li><a href="">Todos os serviços</a></li>
                <li><a href="">Social Media</a></li>
              </ul>
          </div>
          <div className={styles.contentBlock}>
              <h6>ATUAÇÃO</h6>
              <ul>
                <>
                  <li><a href="/tributario">Direito Tributário</a></li>
                  <li><a href="/societario">Societário</a></li>
                  <li><a href="/empresarial">Direito Empresarial</a></li>
                  <li><a href="/contratos">Contratos</a></li>
                  <li><a href="/governanca">Governança Corporativa</a></li>
                  <li><a href="/reestruturacao">Reestruturação e Insolvência</a></li>
                </>
              </ul>
          </div>
        </div>
        <div className={styles.footerCopy}>
            <h6>© 2023 MONTEZANO FIGUEIREDO. Todos os Direitos Reservados.</h6>

            <a href=""><p>•<strong> Privacidade</strong> e <strong>Termos</strong> de Uso.</p></a>
        </div>
      </div>
    </footer>
  )
}
