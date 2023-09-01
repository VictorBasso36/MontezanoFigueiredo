import Image from 'next/image';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Link from 'next/link';
import ButtonSupport from '../buttons/buttonSuport';

interface propsContentPost{
    dataPost: string;
    TituloPreConteudo: string;
    BlogPost: string;
}

export default function ContentPost ({ BlogPost, TituloPreConteudo }: propsContentPost) {
  const [modifiedBlogPost, setModifiedBlogPost] = useState(BlogPost);
  const [modifiedTituloPreConteudo, setModifiedTituloPreConteudo] = useState(TituloPreConteudo)
  useEffect(() => {
    const modifiedContent = BlogPost.replace(
      /(!\[.*?\]\()([^)]+)/g,
      (match, start, imgUrl) => {
        if (!imgUrl.startsWith('https://montezano.bassodev.com.br')) {
          return `${start}https://montezano.bassodev.com.br${imgUrl}`;
        }
        return match;
      }
    );
    setModifiedBlogPost(modifiedContent);
  }, [BlogPost]);

  useEffect(() => {
    const modifiedTituloPreConteudo = TituloPreConteudo.replace(
      /(!\[.*?\]\()([^)]+)/g,
      (match, start, imgUrl) => {
        if (!imgUrl.startsWith('https://montezano.bassodev.com.br')) {
          return `${start}https://montezano.bassodev.com.br${imgUrl}`;
        }
        return match;
      }
    );
    setModifiedTituloPreConteudo(modifiedTituloPreConteudo);
  }, [BlogPost]);
  return (
    <section className={styles.mainContent}>
        <div className={styles.HeaderBack}>
          <Link href="/Conteudo">
            <button>
              <Image src={'/icons8-voltar-50.png'} width={20} height={20} alt='arrow montezano'/><p> Voltar</p>
            </button>
          </Link>
        </div>
        <div className={styles.mainContainer}>
            <div className={styles.PostHere}> 
              <ReactMarkdown className={styles.PostTitle}>
                {modifiedTituloPreConteudo ? modifiedTituloPreConteudo : ''}
              </ReactMarkdown>
              <ReactMarkdown>
                {modifiedBlogPost ? modifiedBlogPost : ''}
              </ReactMarkdown>
            </div>            
            <div className={styles.ConvertArea}>
              <div className={styles.CreditArea}>
                <p className={styles.GhostWhiter}>Por<span>:</span></p>
                <a href="" title='Social midia'>
                  <p className={styles.NameAreaa}>Montezano Figueiredo</p>
                </a>
                <p className={styles.Location}>São Paulo<span>/</span>SP</p>
              </div>
              <button className={styles.ButtonModalConvert}>
                <p>Tire suas dúvidas !</p>
              </button>
            </div>
        </div>  
    </section>
  );
}
