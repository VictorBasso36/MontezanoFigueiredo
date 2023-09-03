"use client"
import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

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
  console.log(data)
  if (loading) return <p>Cargando...</p>;
  if (error) return null;
  return (
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
            social midia component
          </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop={false}
              autoplay={{
                delay: 1500, 
                disableOnInteraction: false,
              }}
              className={styles.swiperMain}
            >
            {data?.videos?.data?.map((video: any, index: number) => (
                <>
                <SwiperSlide key={index} className={styles.Slide}>
                  <a href={video?.attributes?.LinkVideo} target='_blank'>
                    <div
                      className={styles.VideoContainer}
                      
                    >
                      
                      <Image className={styles.playVideo} src={'/playvideo.png'} alt='playvideo' width={45} height={45}></Image>
                      <div className={styles.filter} style={{
                        backgroundImage: `url('https://montezano.bassodev.com.br/uploads/${video?.attributes?.ImagemVideo?.data?.attributes?.url}')`,
                      }}></div>
                    </div>  
                  </a>
                </SwiperSlide>

                </>
            ))}               
              <SwiperSlide className={styles.Slide}>
                <div className={styles.VideoContainer} style={{flexDirection: 'column'}}>
                  <Image className={styles.playVideo} src={'/playvideo.png'} alt='playvideo' width={45} height={45}></Image>
                  <h2 style={{color: "white"}}>Mais videos</h2>
                  
                </div>
              </SwiperSlide>
            </Swiper>
        </div>  
    </section>
  );
}