"use client"
import Image from 'next/image';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Virtual } from 'swiper/modules';
import SocialMidiaIcon from '../socialMidiaIcons';
import Loading from '../loading';

export default function Confiaca() {
  const dataQuery = gql`
  query Videos {
    videos {
      data {
        attributes {
          LinkVideo
          ImagemVideo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    socialMidia {
      data {
        attributes {
          Instagram
          InstagramVideos
        }
      }
    }
  }`
  const { loading, error, data } = useQuery(dataQuery);
  const [slidesPerView, setSlidesPerView] = useState<'auto' | number>(3); // Inicialmente, defina para 3 slides por visualização

  // Adicione um ouvinte de redimensionamento para verificar a largura da tela
  useEffect(() => {
    const handleResize = () => {
      // Verifique a largura da tela
      if (window.innerWidth < 1024) {
        setSlidesPerView('auto');
      } else {
        setSlidesPerView(3);
      }
    };

    // Execute a função de verificação de largura ao montar o componente e ao redimensionar a janela
    handleResize();
    window.addEventListener('resize', handleResize);

    // Remova o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (!loading && data?.videos?.data) {
      setSlides(data.videos.data);
    }
  }, [loading, data]);
  if (error) return null;
  return (
    loading 
      ? 
      <section className={styles.mainSection}>
        <div className={styles.ResutadoContainer} style={{justifyContent: 'center'}}>
        <Loading/> 
        </div>
      </section>
      :
    <section className={styles.mainSection}>
        <div className={styles.ResutadoContainer}>
          <div className={styles.ContainerResultados}>
            <p>Confiança vem dos</p>
            <h2>
              RESULTADOS
            </h2>
            <p>E RELACIONAMENTOS</p>
            <p className={styles.ResultadoDescription}>
              A Montezano Figueiredo é um <span>Hub de inteligência</span> que alinha a Gestão Tributária e Planejamento Estratégico. 
            </p>
            <br />
            <SocialMidiaIcon transformScale={1.4}/>
          </div>
          {data?.videos?.data && data.videos.data.length > 0 && (
            <Swiper
              spaceBetween={10}
              slidesPerView={slidesPerView}
              centeredSlides={false}
              loop={false}
              grabCursor={true}
              modules={[Autoplay, Virtual]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              className={styles.swiperMain}
            >
              {slides.map((video: any, index: number) => (
                <SwiperSlide key={index} className={styles.Slide}>
                  <a href={video?.attributes?.LinkVideo} target='_blank'>
                    <div className={styles.VideoContainer}>
                      <Image
                        className={styles.playVideo}
                        src={'/playvideo.png'}
                        alt='playvideo'
                        width={45}
                        height={45}
                      />
                      <div
                        className={styles.filter}
                        style={{
                          backgroundImage: `url('https://montezano.bassodev.com.br/uploads/${video?.attributes?.ImagemVideo?.data?.attributes?.url}')`,
                        }}
                      ></div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

        </div>  
    </section>

  );
}