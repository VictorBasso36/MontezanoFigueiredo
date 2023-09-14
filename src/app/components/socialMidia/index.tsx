"use client"
import Image from 'next/image';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Virtual } from 'swiper/modules';
import Loading from '../loading';
interface ScalableComponentProps {
    transformScale: number;
}

export default function Whatsapp({transformScale}:ScalableComponentProps) {
  const dataQuery = gql`
  query SocialMidia {
  socialMidia {
    data {
      id
      attributes {
        Whatsapp
      }
    }
  }
  }`
  const { loading, error, data } = useQuery(dataQuery);
  if (error) return null;
  return (
    <div className={styles.divwhatsapp} style={{ transform: `scale(${transformScale})` }}>
        <a href={data?.socialMidia?.data?.attributes?.Whatsapp}>
            <Image src={'/icons8-whatsapp-100.png'}  width={45} height={45} alt='whatsapp montezano figueiredo'></Image>
        </a>
    </div>
  );
}