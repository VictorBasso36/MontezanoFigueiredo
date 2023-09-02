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
                <p><span>-</span>Nossos Serviços<span>-</span></p>
                <h2>ACELERE O CRESCIMENTO DO SEU NEGÓCIO <strong> DE FORMA ESTRATÉGICA </strong></h2>
                <p>Vem conosco?</p>
            </div>
        </div>
        <div className={styles.CardHere}>
            <CardAtuacao />
            {data?.atuacaos?.data?.map((atuacao: any, index: React.Key | null | undefined) => (
                <CardServico title={atuacao?.attributes?.TituloCard} id={'/Areas-de-Atuacao/Servico/' + atuacao?.id} key={index} />
            ))}
        </div>
    </section>
  );
}