import Image from 'next/image';
import styles from './card.module.css';
import React from 'react';
import ButtonMain from '../../buttons/buttonMain';
import ButtonSupport from '../../buttons/buttonSuport';


interface CardBlogProps {
  backgroundImage: string;
  tagImage: string;
  tagText: string;
  title: string;
  description: string;
}

export default function CardBlog({
  backgroundImage,
  tagImage,
  tagText,
  title,
  description,
}: CardBlogProps) {
  return (
    <article className={styles.cardMain}>
      <div className={styles.MainImage} style={{backgroundImage:"url(/simbolo-box-areia.png)"}} />
      <div className={styles.textArea}>
        <div className={styles.tagArea}>
          <Image src="simbolo-marrom.svg" width={25} height={25}  alt="Imagem do card"/>
          <p>Direito Tributário</p>
        </div>
        <div className={styles.titleArea}>
          <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
        </div>
        <p className={styles.Description}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
        <ButtonSupport buttonText='Saiba +'buttonLink='/post' />
      </div>
      
    </article>
  )
}