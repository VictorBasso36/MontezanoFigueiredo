"use client";
import Image from 'next/image'
import styles from './banner.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import SocialMidiaIcon from '../socialMidiaIcons';
interface Props {
  id: string;
  title: string;
  TopicoCard: string;
  publishedAt: string;
  TituloPrincipal: string;
  TempoLeitura: number;
  bannerURL: string;
}
export default function Banner({
  id,
  title,
  TopicoCard,
  publishedAt,
  TituloPrincipal,
  TempoLeitura,
  bannerURL
}:Props) {
  const pathname = usePathname();
  const query = gql`
  query BannersFoto {
    bannersFoto {
      data {
        id
        attributes {
          AtuacaoFoto {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          ContatoFoto {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          ConteudoFoto {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          HomeFoto {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          QuemSomosFoto {
            data {
              attributes {
                url
                alternativeText
              }
            }
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
  }`

  const { data } = useQuery(query);


  return (
    <div className={styles.banner} >
        {pathname === "/" &&     
        <> 
          <div className={styles.bannerHome} style={{zIndex: 2}}>
            <div className={styles.ContentMainBanner}>
                <p><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
                <h1>MONTEZANO <strong>FIGUEIREDO</strong></h1>
            </div>        
            <div className={styles.buttonArea} style={{zIndex: 2}}>
              <ButtonMain buttonLink='/Areas-de-Atuacao' buttonText='Serviços' />
              <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
            </div> 
          </div>
          <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${data?.bannersFoto?.data?.attributes?.HomeFoto?.data?.attributes?.url}")`}}></div>
        </> 
        } 
        {pathname.includes("/Quem-Somos") &&   
        <>   
        <div className={styles.bannerquemSomos} style={{zIndex: 2}}>
          <div className={styles.ContentQuemSomos}>
              <h1><span style={{color:'white'}}>ESTRATÉGIA COM <strong>CONSCIÊNCIA,</strong></span><br /> RESPONSABILIDADE E <strong style={{color: 'var(--suportColor)'}}>AGILIDADE</strong>.</h1>
          </div>  
          <div className={styles.buttonArea} style={{zIndex: 2}}>
            <ButtonMain buttonLink='/Areas-de-Atuacao' buttonText='Serviços' />
            <ButtonSupport buttonLink='/Conteudo' buttonText='Conteudo' />
          </div>
        </div>
        <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${data?.bannersFoto?.data?.attributes?.QuemSomosFoto?.data?.attributes?.url}")`}}
></div>
        </> 
        }
        {pathname === "/Areas-de-Atuacao" &&   
        <>  
          <div className={styles.atuacaoBanner} style={{zIndex: 2}}>
            <div className={styles.Content}>
                <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
                <h1 className={styles.AtuacaoTipe}>SERVIÇOS <strong>PERSONALIZADOS</strong></h1>
                <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
            </div>  
            <div className={styles.buttonArea} style={{zIndex: 2, justifyContent: 'center'}}>
              <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
            </div>
          </div>
          <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${data?.bannersFoto?.data?.attributes?.AtuacaoFoto?.data?.attributes?.url}")`}}></div>
        </>  
        }
        {pathname.includes("/Areas-de-Atuacao/Servico/") &&   
        <>  
          <div className={styles.atuacaoBanner} style={{zIndex: 2}}>
            <div className={styles.Content}>
                <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
                <h1 className={styles.AtuacaoTipe}>SERVIÇOS <strong>PERSONALIZADOS</strong></h1>
                <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
            </div>  
            <div className={styles.buttonArea} style={{zIndex: 2}}>
              <ButtonMain buttonLink='/Areas-de-Atuacao#Servicos' buttonText='Serviços' />
              <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
            </div>
          </div>
          <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${data?.bannersFoto?.data?.attributes?.AtuacaoFoto?.data?.attributes?.url}")`}}></div>
        </>  
        }


        {pathname.includes("/Conteudo/Post/") &&   
        <>  
          <div className={styles.atuacaoBanner} style={{zIndex: 2}}>
            <div className={styles.ContentMain}>
                <p className={styles.ContentTopic}><strong>-</strong>  {TopicoCard} <strong>-</strong></p>
                <h1 className={styles.MainTitleContent}>{TituloPrincipal}</h1>
                <p className={styles.ContentMainBlog}>{dayjs(publishedAt).format('DD/MM/YYYY')} <span>-</span> {TempoLeitura} Minutos de Leitura</p>
            </div>  
            <div className={styles.buttonAreaBlog} style={{zIndex: 2}}>
              <a href="/Contato">
                <button>
                  Fale Conosco
                </button>
              </a>
            </div>
          </div>
          <div className={styles.BackgroundFilter} style={{backgroundImage: `url("https://montezano.bassodev.com.br${bannerURL}"`}}></div>
        </>  
        }
        {pathname === "/Conteudo" &&    
        <>  
          <div className={styles.BannerContent} style={{zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '90%'}}>
            <div className={styles.Content}>
                <p className={styles.preTitle}><strong>-</strong>Fique a frente de todas as notícias que impactam seu negócio<strong>-</strong></p>
                <h1>PORTAL DE <strong>CONTEÚDO</strong></h1>
                
            </div>  
            <div className={styles.buttonArea} style={{zIndex: 2, justifyContent: 'center'}}>
              <ButtonSupport buttonLink='/Contato' buttonText='Contato' />
            </div>
          </div>
          <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br${data?.bannersFoto?.data?.attributes?.ConteudoFoto?.data?.attributes?.url}")`}}></div>
  
        </> 
        } 
        {pathname === "/Contato" && 
        <>
          <div className={styles.contatoBanner} style={{zIndex: 2}}>
            <div className={styles.Content}>
              <h1 className={styles.AtuacaoTipe}>CONTATO <strong>PESSOAL</strong></h1>
              <SocialMidiaIcon transformScale={1.1}/>
            </div>  
            <div className={styles.buttonAreaWhatsapp} style={{zIndex: 2}}>
              <a href={data?.socialMidia?.data?.attributes?.Whatsapp} target="_blank">
                <button className={styles.whatsappbanner}>
                  <p>Contato</p>
                  <Image src={'/whatsapp.svg'} width={30} height={30} alt={''}/>
                </button>
              </a> 
            </div>
          </div>
          <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${data?.bannersFoto?.data?.attributes?.ContatoFoto?.data?.attributes?.url}")`}}></div>
        </>
        }
    </div>
  )
}
