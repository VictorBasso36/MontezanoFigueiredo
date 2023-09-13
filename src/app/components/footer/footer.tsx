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
      socialMidia {
        data {
          attributes {
            Telefone
            TextoEndereco
            LinkEndereco
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
                <li><a href={`tel:${data?.socialMidia?.data?.attributes?.Telefone}`}>{data?.socialMidia?.data?.attributes?.Telefone}</a></li>
                <li><a href={data?.socialMidia?.data?.attributes?.LinkEndereco}>{data?.socialMidia?.data?.attributes?.TextoEndereco}</a></li>
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
