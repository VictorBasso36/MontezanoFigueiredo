
"use client";
import React from "react";
import { gql, useQuery } from '@apollo/client';
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import Convert from "@/app/components/convertClient/convert";
import AtuacaoAreas from "@/app/components/atuacao";
import Banner from "@/app/components/mainBanner/banner";
import CreditBanner from "@/app/components/creditBannner";
import styles from "./index.module.css"
import CardConvercao from "@/app/components/cards/cardConvercao/cardConvercao";
import CardAtuacao from "@/app/components/cards/cardAtuacao/caardAtuacao";
import Confiaca from "@/app/components/confiancaResultados";
import Loading from "@/app/components/loading";

export default function ServicoPage({ params }: { params: { slug: string } }) {
  const GET_ATUACOES = gql`
  query Attributes {
  atuacaos {
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
      }
    }
  }
  socialMidia {
    data {
      attributes {
        Whatsapp
      }
    }
  }
}
`;

const { loading, error, data } = useQuery(GET_ATUACOES);

if (loading) return  (
  <>
    <div style={
      {
        width: '100%',
        height: '100%',
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

    return (
      <>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.mainTitle}>
        <div className={styles.mainTitleContainer}>
          <CardAtuacao linkWhatsApp={data?.socialMidia?.data?.attributes?.Whatsapp} />
          <div className={styles.textArea}>
            <p className={styles.pretitle}><strong>-</strong>tex example for pre title<strong>-</strong></p>
             {data?.atuacaos?.data[0]?.attributes?.PreTitulo ? <p><strong>-</strong>{data?.atuacaos?.data[0]?.attributes?.PreTitulo}<strong>-</strong></p> : null}
            <h1>{data?.atuacaos?.data[0]?.attributes?.TituloPrincipal}</h1>
            <p className={styles.Description}>{data?.atuacaos?.data[0]?.attributes?.DescricaoPrincipal}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.areaAtuacaoDescription}>
        <h2></h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {data?.atuacaos?.data?.attributes?.DescricaoAdvogado}
      <CreditBanner social="/Contato" description={data?.atuacaos?.data[0]?.attributes?.DescricaoAdvogado} 
      title={data?.atuacaos?.data[0]?.attributes?.AdvogadoResponsavel} url={data?.atuacaos?.data[0]?.attributes?.FotoAdvogado?.data?.attributes?.url}/>
      <Confiaca />
      <AtuacaoAreas/>
      <Convert/>
      <Footer/>
      </>
    );
}



