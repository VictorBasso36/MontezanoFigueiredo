"use client";
import Image from 'next/image'
import styles from './banner.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

export default function Banner() {
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
  }`

  const { data } = useQuery(query);
  console.log(data)

  return (
    <div className={styles.banner} >
        {pathname === "/" &&     
        <> 
          <div className={styles.bannerHome} style={{zIndex: 2}}>
            <div className={styles.Content}>
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
            <div className={styles.buttonArea} style={{zIndex: 2}}>
              <ButtonMain buttonLink='/Areas-de-Atuacao#Servicos' buttonText='Serviços' />
              <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
            </div>
          </div>
          <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${data?.bannersFoto?.data?.attributes?.AtuacaoFoto?.data?.attributes?.url}")`}}></div>
        </>  
        }
        {pathname.includes("/Areas-de-Atuacao/Servico/") &&   
        <>  
        1
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
          <div className={styles.BackgroundFilter} style={{backgroundImage: 'url("/bannerinmage.webp")'}}></div>
        </>  
        }
        {pathname === "/Conteudo" &&    
        <>  
          <div className={styles.BannerContent} style={{zIndex: 2}}>
            <div className={styles.Content}>
                <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
                <h1>PORTAL DE <strong>CONTEÚDO</strong></h1>
                <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
            </div>  
            <div className={styles.buttonArea} style={{zIndex: 2}}>
              <ButtonMain buttonLink='/Areas-de-Atuacao#Servicos' buttonText='Serviços' />
              <ButtonSupport buttonLink='/Quem-Somos' buttonText='Conheça' />
            </div>
          </div>
          <div className={styles.BackgroundFilter} style={{ backgroundImage: `url("https://montezano.bassodev.com.br/uploads/${data?.bannersFoto?.data?.attributes?.ConteudoFoto?.data?.attributes?.url}")`}}></div>
  
        </> 
        } 
        {pathname === "/Contato" && 
        <>
          <div className={styles.contatoBanner} style={{zIndex: 2}}>
            <div className={styles.Content}>
              <p className={styles.preTitle}><strong>-</strong>Excelência em Gestão Tributária e Planejamento Estratégico<strong>-</strong></p>
              <h1 className={styles.AtuacaoTipe}>CONTATO <strong>PESSOAL</strong></h1>
              <p className={styles.ContentP}>Estratégia com consciência, responsabilidade e <span>agilidade</span>. </p>
            </div>  
            <div className={styles.buttonAreaWhatsapp} style={{zIndex: 2}}>
              <a href="https://api.whatsapp.com/message/GE66DI4WCKWHJ1?autoload=1&app_absent=0" target="_blank">
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
