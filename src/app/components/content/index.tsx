import Image from 'next/image';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ButtonSupport from '../buttons/buttonSuport';
import Link from 'next/link';

interface propsContentPost{
    dataPost: string;
    TituloPreConteudo: string;
    BlogPost: string;
}

export default function ({dataPost, TituloPreConteudo, BlogPost}: propsContentPost) {
  const [modifiedBlogPost, setModifiedBlogPost] = useState(BlogPost);

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
  return (
    <section className={styles.mainContent}>
        <div className={styles.mainContainer}>
            <div className={styles.PostHere}>
              <div className={styles.HeaderBack}>
                <Link href="/Conteudo">
                  <button>
                    <Image src={'/arrowIcon.svg'} width={30} height={30} alt='arrow montezano'/><p> Voltar</p>
                  </button>
                </Link>
              </div>
              <ReactMarkdown>
                {modifiedBlogPost}
              </ReactMarkdown>
            </div>            
            <div className={styles.ConvertArea}>
                portaltal
            </div>
        </div>  
    </section>
  );
}