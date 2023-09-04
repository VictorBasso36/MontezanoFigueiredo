"use client";
import Image from 'next/image'
import styles from './footer.module.css'
import { useEffect, useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import SocialMidiaIcon from '../socialMidiaIcons';
export default function Footer() {
  const GET_ATUACOES = gql`
    query Atuacoes {
      atuacaos {
        data {
          id
          attributes {
            TituloCard
          }
        }
      }
    }
  `;

  const { data } = useQuery(GET_ATUACOES);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image src="/logoFooter.svg" width={250} height={250} alt={''}></Image>
        <div className={styles.footerContent}>
        <div className={styles.contentBlock}>
              <h6>ATUAÇÃO</h6>
              <ul>
                <>
                  {data?.atuacaos?.data.map((atuacao: any, index: any) => (
                    <li key={index}>
                      <Link href={'/Areas-de-Atuacao/Servico/' + atuacao?.id}>{atuacao?.attributes?.TituloCard}</Link>
                    </li>
                  ))}

                </>
              </ul>
          </div>
          <div className={styles.contentBlock}>
              <h6>CONTATO</h6>
              <ul>
                <li><a href="">+55 (11) 4314-1360</a></li>
                <li><a href="https://www.google.com.br/maps/place/Montezano+Figueiredo/@-23.5891086,-46.6782698,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce57db97d4eced:0x66c11f49724e760e!8m2!3d-23.5891135!4d-46.6756949!16s%2Fg%2F11thwdy9b6?entry=ttu">Rua Dr. Eduardo de Souza Aranha, 387 15º andar CJ 152 - Itaim Bibi - São Paulo.</a></li>
              </ul>
          </div>
          <div className={styles.contentBlock}>
              <h6>CONTÉUDO</h6>
              <ul>
                <li><a href="/Conteudo">Últimas Notícias</a></li>
                <li><a href="/Atuacao">Todos os serviços</a></li>
                <li><a href="/Contato">Social Media</a></li>
                <li><SocialMidiaIcon transformScale={1.1}/></li>
              </ul>
          </div>
          <div className={styles.contentBlock}>
              <h6>GRUPO MF</h6>
              <ul>
                <li><a href="/Quem-Somos">Sobre nós</a></li>
                <li><a href="/Conteudo">Conteúdo</a></li>
                <li><a href="/Contato">Contato</a></li>
              </ul>
          </div>
        </div>
        <div className={styles.footerCopy} id="Areas-de-Atuacao">
            <h6>© 2023 MONTEZANO FIGUEIREDO. Todos os Direitos Reservados.</h6>

            {/* <Link href={'/Politica-de-privacidade'}><p>•<strong> Privacidade</strong> e <strong>Termos</strong> de Uso.</p></Link>
        */}</div> 
      </div>
    </footer>
  )
}
