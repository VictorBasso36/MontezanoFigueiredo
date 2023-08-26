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
  id: string;
}

export default function CardBlog({
  backgroundImage,
  tagImage,
  tagText,
  title,
  description,
  id,
}: CardBlogProps) {
  return (
    <article className={styles.cardMain}>
      <div className={styles.MainImage} style={{backgroundImage:`url(https://montezano.bassodev.com.br${backgroundImage})`}} />
      <div className={styles.textArea}>
        <div className={styles.tagArea}>
          <Image src="simbolo-marrom.svg" width={25} height={25}  alt="Imagem do card"/>
          <p>{tagText}</p>
        </div>
        <div className={styles.titleArea}>
          <h4>{title}</h4>
        </div>
        <p className={styles.Description}>{description}</p>
        <ButtonSupport buttonText='Saiba +' buttonLink={`/Conteudo/Post/${id}`} />
      </div>
      
    </article>
  )
}