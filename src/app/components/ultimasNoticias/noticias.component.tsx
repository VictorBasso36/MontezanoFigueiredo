"use client";
import Image from 'next/image'
import styles from './noticias.module.css'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'
import CardBlog from '../cards/cardBlog';
import { gql, useQuery } from '@apollo/client';
export default function NoticiasLast() {

const query = gql`
query Blogs {
    blogs {
      data {
        attributes {
          BlogPost
          DescricaoCard
          EscritoPor
          FotoCard {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
  `
const { loading, error, data } = useQuery(query); 
console.log(data)


  return (
    <section className={styles.MainWidth}>
        <div className={styles.containerNoticias}>
            <div className={styles.Title}>
                <h3>Sempre <span>atualizados</span>  <br /><strong>
                ÚLTIMAS <span>NOTÍCIAS</span></strong></h3>

                <Link href={"/Noticias"}>
                    <button className={styles.ButtonConvert}>Acompanhe todas as notícias  +</button>
                </Link>   
                
            </div>
            <div className={styles.CardList}>
                <CardBlog backgroundImage={''} tagImage={''} tagText={''} title={''} description={''} />
                <CardBlog backgroundImage={''} tagImage={''} tagText={''} title={''} description={''} />
                <CardBlog backgroundImage={''} tagImage={''} tagText={''} title={''} description={''} />

            </div>
        </div>
    </section>
    )
}
