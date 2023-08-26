
"use client";
import React from "react";
import { gql, useQuery } from '@apollo/client';


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



