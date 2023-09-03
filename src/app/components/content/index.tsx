import Image from 'next/image';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Link from 'next/link';
import ButtonSupport from '../buttons/buttonSuport';
import { StringLiteralType } from 'typescript';

interface propsContentPost{
    dataPost: string;
    TituloPreConteudo: string;
    BlogPost: string;
    escritoPor: string;
    localEscrito: String;
    siglaEscrito: string;
    fonte: string;
    MidiaSocialEscritorLink: string;
}

export default function ContentPost ({ 
  BlogPost,
  TituloPreConteudo,
  escritoPor,
  localEscrito,
  siglaEscrito,
  fonte,
  MidiaSocialEscritorLink
}: propsContentPost) {
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
                <a href={MidiaSocialEscritorLink} title='Social midia' target='_blank'>
                  <p className={styles.NameAreaa}>{escritoPor}</p>
                </a>
                <p className={styles.Location}>{localEscrito}<span>/</span>{siglaEscrito}</p>
              </div>
              <button className={styles.ButtonModalConvert}>
                <p>Tire suas dúvidas !</p>
              </button>
              <br />
              <br />
              <br />
              <br />
              <br />
              {fonte ?
              <div className={styles.CreditArea}>
                <p className={styles.GhostWhiter}>Fonte<span>:</span></p>
                <a href={fonte} target='_blank' style={{wordWrap: 'break-word'}}><p className={styles.Location}>{fonte}</p></a>
              </div>
              :
              null
              }
              <br />
              <br />
              <br />
              <br />
            </div>
        </div>  
    </section>
  );
}
