"use client"
import Image from 'next/image'
import styles from './index.module.css'
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
import ButtonSupport from '../components/buttons/buttonSuport'

export default function QuemSomos() {
  const query = gql`
  query Equipes {
    equipes {
      data {
        id
        attributes {
          Nome
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
    <CreditEquipeBanner key={index} social={equipe?.attributes?.MidiaSocial} description={equipe?.attributes?.Descricao} title={equipe?.attributes?.Nome} url={equipe?.attributes?.Foto?.data?.attributes?.url} />
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
      <Banner id='' title=''/>
    </main>
    <div className={styles.MainTtitle}>
      <div className={styles.MainConteiner}>
        <p className={styles.titleFirst}><strong>-</strong>Sobre nós<strong>-</strong></p>
        <h2>A FRENTE DO MERCADO, SOMOS FOCADOS <strong>NA ENTREGA</strong>.</h2>
        <p className={styles.description}>A visão diferenciada da <span>Montezano Figueiredo</span> está revolucionando a gestão tributária e o planejamento estratégico no Brasil. Com consciência, responsabilidade e agilidade oferecemos soluções personalizadas, focando em trazer a melhor versão do seu negócio. </p>
        <br />
        <br />
        <br />
        <ButtonSupport buttonLink='gogle.com' buttonText='Contato'/>
      </div>
    </div>
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
