"use client"
import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import CardServico from '../components/cards/cardServico'
import CardAtuacao from '../components/cards/cardAtuacao/caardAtuacao'
import AtuacaoAreas from '../components/atuacao'
import { gql, useQuery } from '@apollo/client';
import CreditEquipeBanner from '../components/cards/equipeCard'
import Numeros from '../components/numeros'
import Confiaca from '../components/confiancaResultados'

export default function QuemSomos() {
  const query = gql`
  query Equipes {
    equipes {
      data {
        id
        attributes {
          Cargo
          Descricao
          Foto {
            data {
              attributes {
                url
              }
              id
            }
          }
          MidiaSocial
          createdAt
        }
      }
    }
  }`
  const { data } = useQuery(query);
  console.log(data);

  const equipeBanners = data?.equipes?.data.map((equipe: any, index: any) => (
    <CreditEquipeBanner key={index} social={equipe?.attributes?.MidiaSocial} description={equipe?.attributes?.Descricao} title={equipe?.attributes?.Cargo} url={equipe?.attributes?.Foto?.data?.attributes?.url} />
  ));
  function shuffleArray(array: any) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  // Verificar se equipeBanners não é nulo antes de embaralhar
  const equipeBannersEmbaralhado = equipeBanners ? shuffleArray(equipeBanners) : [];
  
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner />
    </main>

    <p></p>
    <h2>LOREM IPSUM DOLLE ASSIT AMET</h2>
    <p>A visão diferenciada da Montezano Figueiredo está revolucionando a gestão tributária e o planejamento estratégico brasileiro.Atualmente, o que nos distingue no mercado é a nossa agilidade, sensibilidade e responsabilidade para com os nossos clientes.Isso tudo faz com que nós sejamos uma pérola no mercado, com uma habilidade única em oferecer soluções personalizadas para empresas de todo o Brasil.</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {equipeBannersEmbaralhado.map((banner, index) => (
        <><br /><br /><br /> <br /><br />
        {banner}
        </>
      ))}
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Numeros />
    <Confiaca />
    <Convert/>
    <Footer/>
    </>
  )
}
