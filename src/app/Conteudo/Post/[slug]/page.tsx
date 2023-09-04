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
import Loading from '@/app/components/loading';

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
          MidiaSocialEscritorLink
          LocalEscritor
          FotoCard {
            data {
              attributes {
                url
              }
            }
          }
          ImagemBanner {
            data {
              attributes {
                url,
              }
            }
          },
          EscritoPor
          DescricaoCard
          BlogPost
          Fonte
          DescricaoAdvogado
          AdvogadoResponsavel
          FotoAdvogado {
            data {
              attributes {
                url
              }
            }
          }
        }
      }    
    }
  }`
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      blogId: params.slug,
    },
  });
  if (loading) return  (
    <>
      <div style={
        {
          width: '100%',
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
      {loading ? <Loading /> :
      <><Navbar /><Banner title='' id='' TopicoCard={data?.blog?.data?.attributes?.TopicoCard} publishedAt={data?.blog?.data?.attributes?.publishedAt} TituloPrincipal={data?.blog?.data?.attributes?.TituloPrincipal} TempoLeitura={data?.blog?.data?.attributes?.TempoLeitura} bannerURL={data?.blog?.data?.attributes?.ImagemBanner?.data?.attributes?.url} /><ContentPost
          escritoPor={data?.blog?.data?.attributes?.EscritoPor}
          MidiaSocialEscritorLink={data?.blog?.data?.attributes?.MidiaSocialEscritorLink}
          siglaEscrito={data?.blog?.data?.attributes?.SiglaLocalEscritor}
          localEscrito={data?.blog?.data?.attributes?.LocalEscritor}
          fonte={data?.blog?.data?.attributes?.Fonte}
          BlogPost={data?.blog?.data?.attributes?.BlogPost} dataPost='' TituloPreConteudo={data?.blog?.data?.attributes?.TituloPreConteudo} /><CreditBanner description={data?.blog?.data?.attributes?.DescricaoAdvogado} title={data?.blog?.data?.attributes?.AdvogadoResponsavel} url={data?.blog?.data?.attributes?.FotoAdvogado?.data?.attributes?.url} social={data?.socialMidia?.data?.attributes?.Whatsapp} /><br /><NoticiasLast /><Convert /><Footer /></>
      }
    </>
  )
}
