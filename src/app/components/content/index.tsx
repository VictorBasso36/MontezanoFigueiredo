import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface propsContentPost{
    dataPost: string;
    TituloPreConteudo: string;
    BlogPost: string;
}

export default function ContentPost() {
  return (
    <section className={styles.mainContent}>
        <div className={styles.mainContainer}>
            <div className={styles.ConvertArea}>
                
            </div>
            <div className={styles.ConvertArea}>
            {/* <ReactMarkdown>
                
            </ReactMarkdown> */}
            </div>
        </div>  
    </section>
  );
}