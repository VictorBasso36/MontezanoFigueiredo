
"use client";
import React from "react";
import { gql, useQuery } from '@apollo/client';
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import Convert from "@/app/components/convertClient/convert";
import Image from "next/image";
import AtuacaoAreas from "@/app/components/atuacao";
import Banner from "@/app/components/mainBanner/banner";
import CreditBanner from "@/app/components/creditBannner";
import styles from "./index.module.css"
import CardConvercao from "@/app/components/cards/cardConvercao/cardConvercao";
import CardAtuacao from "@/app/components/cards/cardAtuacao/caardAtuacao";
import Confiaca from "@/app/components/confiancaResultados";
import Loading from "@/app/components/loading";
import Whatsapp from "@/app/components/socialMidia";

export default function ServicoPage({ params }: { params: { slug: string } }) {
  const GET_ATUACAO = gql`
    query Atuacao($atuacaoId: ID) {
      atuacao(id: $atuacaoId) {
        data {
          id
          attributes {
            AdvogadoResponsavel
            DescricaoAdvogado
            DescricaoPrincipal
            DescricaoServico
            FotoAdvogado {
              data {
                attributes {
                  url
                }
              }
            }
            TituloPrincipal
            TituloCard
            PreTitulo
            DescricaoCard
            DescricaoPrincipal
            ListaServicos {
              id
              Servico
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ATUACAO, {
    variables: { atuacaoId: params.slug },
  });

if (loading) return  (
  <>
    <div style={
      {
        width: '100%',
        zIndex: 2,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }>
      <Loading />
    </div>
    
  </>
)

if (error) return null;
console.log(data)
    return (
      <>
      <Whatsapp transformScale={1} />
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className={styles.mainTitle}>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.mainTitleContainer}>
          <CardAtuacao linkWhatsApp={data?.socialMidia?.data?.attributes?.Whatsapp} />
          <div className={styles.textArea}>
             {data?.atuacao?.data?.attributes?.PreTitulo ? <p className={styles.pretitle}><strong>-</strong>{data?.atuacao?.data?.attributes?.PreTitulo}<strong>-</strong></p> : null}
            <h1>{data?.atuacao?.data?.attributes?.TituloPrincipal}</h1>
            <p className={styles.Description}>{data?.atuacao?.data?.attributes?.DescricaoPrincipal}</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.areaAtuacaoDescription}>
        <div className={styles.areaAtuacaoDescriptionContainer}>
          <p className={styles.PreTitle}><strong>-</strong>Mais Sobre<strong>-</strong></p>
          <h2> A GENTE TE MOSTRA <strong>O MELHOR CAMINHO</strong></h2>
          <p className={styles.descriptionSecond}>{data?.atuacao?.data?.attributes?.DescricaoServico}
</p>
          <div className={styles.cardArea}>
            {data?.atuacao?.data?.attributes?.ListaServicos.map((data: any, index: any) => (
                <div className={styles.CardService} key={index}>
                   <p className={styles.ServiceLine}><strong>-</strong> {data?.Servico}</p>
                </div>
           ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CreditBanner social="/Contato" description={data?.atuacao?.data?.attributes?.DescricaoAdvogado} 
      title={data?.atuacao?.date?.attributes?.AdvogadoResponsavel} url={data?.atuacao?.data?.attributes?.FotoAdvogado?.data?.attributes?.url}/>
      <Confiaca />
      <AtuacaoAreas/>
      <Convert/>
      <Footer/>
      </>
    );
}



