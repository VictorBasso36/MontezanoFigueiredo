"use client";
import Image from 'next/image'
import styles from '../page.module.css'
import AtuacaoAreas from '@/app/components/atuacao'
import Convert from '@/app/components/convertClient/convert'
import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import NoticiasLast from '@/app/components/ultimasNoticias/noticias.component'
import Banner from '@/app/components/mainBanner/banner'
import { gql, useQuery } from '@apollo/client';
import ContentPost from '@/app/components/content';
import CreditBanner from '@/app/components/creditBannner';

export default function ContentPostagem({ params }: { params: { slug: string } }) {
  const GET_POST = gql`
  query Blog($blogId: ID) {
    blog(id: $blogId) {
      data {
        id
        attributes {
          updatedAt
          publishedAt
          createdAt
          TopicoCard
          TituloPrincipal
          TituloPreConteudo
          TituloCard
          TempoLeitura
          SiglaLocalEscritor
          MidiaSocialEscritor
          LocalEscritor
          FotoCard {
            data {
              attributes {
                url
              }
            }
          }
          EscritoPor
          DescricaoCard
          BlogPost
        }
      }
    }
  }`
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      blogId: params.slug,
    },
  });
  console.log(data?.blog?.data?.attributes?.BlogPost)
  if (loading) return <p>Cargando...</p>;
  if (error) return null;
  return (
    <>
      <Navbar/>
      <Banner title='' id=''/>
      <ContentPost BlogPost={data?.blog?.data?.attributes?.BlogPost} dataPost='' TituloPreConteudo={data?.blog?.data?.attributes?.TituloPreConteudo}/>
      <CreditBanner description='' title='' url=''/>
      <br/>
      <NoticiasLast/>
      <Convert/>
      <Footer/>
    </>
  )
}
