
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
        ListaServicos {
          id
          Servico
        }
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
             {data?.atuacaos?.data[0]?.attributes?.PreTitulo ? <p className={styles.pretitle}><strong>-</strong>{data?.atuacaos?.data[0]?.attributes?.PreTitulo}<strong>-</strong></p> : null}
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
        <div className={styles.areaAtuacaoDescriptionContainer}>
          <p className={styles.PreTitle}><strong>-</strong>Mais Sobre<strong>-</strong></p>
          <h2><span>A FRENTE DO MERCADO</span><br /> A GENTE TE MOSTRA <strong>O MELHOR CAMINHO</strong></h2>
          <p className={styles.descriptionSecond}>De maneira criteriosa e detalhada, o trabalho de consultoria empresarial é um conjunto de ações que visa a reestruturação do seu negócio, todas com impacto efetivo na melhora nos resultados.</p>
          <div className={styles.cardArea}>
            {data?.atuacaos?.data[0]?.attributes?.ListaServicos.map((data: any, index: any) => (
                <div className={styles.CardService} key={index}>
                   <Image src={'/simbolo-marrom.svg'} width={45} height={45} alt={''}></Image> <p className={styles.ServiceLine}>{''}{data?.Servico}</p>
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



