
"use client";
import React from "react";
import { gql, useQuery } from '@apollo/client';
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import Convert from "@/app/components/convertClient/convert";
import AtuacaoAreas from "@/app/components/atuacao";
import Banner from "@/app/components/mainBanner/banner";
import CreditBanner from "@/app/components/creditBannner";


export default function ServicoPage({ params }: { params: { slug: string } }) {
//   const GET_ATUACOES = gql`
//   query Atuacoes {
//     atuacaos {
//       data {
//         id
//         attributes {
//           TituloCard
//           DescricaoCard
//         }
//       }
//     }
//   }
// `;

// const { loading, error, data } = useQuery(GET_ATUACOES);

// if (loading) return <p>Cargando...</p>;
// if (error) return null;
    return (
      <>
      <Navbar/>
      <Banner/>
      <div>
        <h1>Post: {params.slug}</h1>
        <p>areaData.description</p>
        {/* Outras informações da área de atuação */}
      </div>
      <CreditBanner description='' title='' url=''/>
      <AtuacaoAreas/>
      <Convert/>
      <Footer/>
      </>
    );
}



