"use client";
import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
import CardAtuacao from '../cards/cardAtuacao/caardAtuacao';
import CardServico from '../cards/cardServico';
import { gql, useQuery } from '@apollo/client';
import Loading from '../loading';

export default function AtuacaoAreas() {

  const GET_ATUACOES = gql`
    query Attributes {
      atuacaos {
        data {
          id
          attributes {
            TituloCard
            DescricaoCard
            DescricaoPrincipal
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ATUACOES);

  if (error) return null;

  return (
    loading 
    ?
    <section className={styles.MainSection}>
      <div className={styles.ContainerArea}>
        <Loading />
      </div>
    </section>
    :
    <section className={styles.MainSection}>
        <div className={styles.ContainerArea}>
            <div className={styles.MainTitleHere}>
                <p><span>-</span>Nossos Serviços<span>-</span></p>
                <h2><strong style={{color:'var(--mainColor)'}}>ACELERE</strong> O CRESCIMENTO DO SEU NEGÓCIO <strong> DE FORMA ESTRATÉGICA </strong></h2>
            </div>
        </div>
        <div className={styles.CardHere} id="Servicos">
            {/* <CardAtuacao /> */}
            {data?.atuacaos?.data?.map((atuacao: any, index: React.Key | null | undefined) => (
                <CardServico title={atuacao?.attributes?.TituloCard} description={atuacao?.attributes?.DescricaoPrincipal} id={'/Areas-de-Atuacao/Servico/' + atuacao?.id} key={index} />
            ))}
        </div>
    </section>
  );
}