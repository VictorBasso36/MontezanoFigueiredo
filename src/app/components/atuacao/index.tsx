"use client";
import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
import CardAtuacao from '../cards/cardAtuacao/caardAtuacao';
import CardServico from '../cards/cardServico';
import { gql, useQuery } from '@apollo/client';

export default function AtuacaoAreas() {

  const GET_ATUACOES = gql`
    query Atuacoes {
      atuacaos {
        data {
          id
          attributes {
            TituloCard
            DescricaoCard
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ATUACOES);

  if (loading) return <p>Cargando...</p>;
  if (error) return null;

  console.log(data);
  return (
    <section className={styles.MainSection}>
        <div className={styles.ContainerArea}>
            <div className={styles.MainTitleHere}>
                <p>Área de Atuação </p>
                <h2>LOREM IPSUM <strong>DOLLER</strong></h2>
                <p>Lorem ipsum é simplesmente uma simulação.</p>
            </div>
        </div>
        <div className={styles.CardHere}>
            <CardAtuacao />
            {data?.atuacaos?.data?.map((atuacao: any, index: React.Key | null | undefined) => (
                <CardServico title={atuacao?.attributes?.TituloCard} description={atuacao?.attributes?.DescricaoCard} id={'/Areas-de-Atuacao/Servico/' + atuacao?.id} key={index} />
            ))}
            <CardAtuacao />
        </div>
    </section>
  );
}