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

export default function SocialMidiaIcon({transformScale}:ScalableComponentProps) {
  const dataQuery = gql`
  query SocialMidia {
  socialMidia {
    data {
      id
      attributes {
        Facebook
        Instagram
        Linkedin
      }
    }
  }
  }`
  const { loading, error, data } = useQuery(dataQuery);
  if (error) return null;
  console.log(data)
  return (
    loading ?
    <Loading />
    :
    
    <div className={styles.divSocialMidia} style={{ transform: `scale(${transformScale})` }}>
        <a href={data?.socialMidia?.data?.attributes?.Facebook}>
            <Image src='/fbicon.svg' width={25} height={25} alt={'Facebook Montezano Figueiredo'}></Image>
        </a>
        <a href={data?.socialMidia?.data?.attributes?.Instagram}>
            <Image src='/instagramicon.svg' width={25} height={25} alt={'Instagram Montezano Figueiredo'}></Image>
        </a>
        <a href={data?.socialMidia?.data?.attributes?.Linkedin}>
            <Image src='/linkedinicon.svg' width={25} height={25} alt={'Linkedin Montezano Figueiredo'}></Image>
        </a>
    </div>
  );
}