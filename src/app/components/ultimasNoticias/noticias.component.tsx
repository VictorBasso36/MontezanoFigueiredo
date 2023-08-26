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
        id
        attributes {
            TituloCard
            FotoCard {
            data {
                attributes {
                url
                }
            }
            }
            DescricaoCard
            EscritoPor
            TopicoCard
        }
        }
    }
    }
  `
const { loading, error, data } = useQuery(query); 
if (loading) return <p>Cargando...</p>;
if (error) return null;
  return (
    <section className={styles.MainWidth}>
        <div className={styles.containerNoticias}>
            <div className={styles.Title}>
                <h3>Sempre <span>atualizados</span>  <br /><strong>
                ÚLTIMOS <span>CONTEÚDOS</span></strong></h3>

                <Link href={"/Conteudo"}>
                    <button className={styles.ButtonConvert}>Acompanhe todas as notícias  +</button>
                </Link>   
                
            </div>
            <div className={styles.CardList}>
                {data?.blogs?.data?.map((blogs: any, index: React.Key | null | undefined) => ( 
                <CardBlog backgroundImage={blogs?.attributes?.FotoCard?.data?.attributes?.url} id={blogs?.id} tagImage={''} tagText={blogs?.attributes?.TopicoCard} title={blogs?.attributes?.TituloCard} description={blogs?.attributes?.DescricaoCard} />
                ))}

            </div>
        </div>
    </section>
    )
}
