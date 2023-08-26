
"use client";
import React from "react";
import { gql, useQuery } from '@apollo/client';
import { usePathname } from "next/navigation";


export default function ServicoPage({ params }: { params: { slug: string } }) {
  return <p>Post: {params.slug}</p>
    return (
      
      <div>
        <h1>areaData.title</h1>
        <p>areaData.description</p>
        {/* Outras informações da área de atuação */}
      </div>
    );
}

export async function getStaticPaths({ params }: { params: { slug: string } }) {
  const GET_ATUACOES = gql`
    query Atuacao($atuacaoId: ID) {
      atuacao(id: $atuacaoId) {
        data {
          id
        }
      }
    }
  `;

  const { data } = useQuery(GET_ATUACOES, {
    variables: { atuacaoId: params.slug },
  });

  const atuacaoId = data.atuacao?.data?.id;

  if (atuacaoId !== null) {
    return { paths: [], fallback: 'blocking' };
  }

  return { paths: [], fallback: false };
}



