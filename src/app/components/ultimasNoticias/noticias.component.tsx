"use client"
import Image from 'next/image';
import { blue } from '@ant-design/colors'
import styles from './noticias.module.css';
import Link from 'next/link';
import CardBlog from '../cards/cardBlog';
import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Divider, Pagination } from 'antd';
import { usePathname } from 'next/navigation';

export default function NoticiasLast() {
const pathname = usePathname();
 const [currentPage, setCurrentPage] = useState(1);
  const pageSize = pathname === "/" ? 3 : 6; 
  
  // Atualizar a URL quando a página muda
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', currentPage.toString());
    window.history.replaceState({}, '', `?${searchParams.toString()}`);
  }, [currentPage]);
  
  const query = gql`
    query Blogs($pagination: PaginationArg) {
      blogs(pagination: $pagination) {
        meta {
            pagination {
                page
                pageCount
                pageSize
                total
            }
        }
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
  `;
  
  const { loading, error, data } = useQuery(query, {
    variables: {
      pagination: {
        pageSize: pageSize,
        page: currentPage,
      },
    },
  });

  useEffect(() => {
    if (data?.blogs?.meta?.pagination) {
      setCurrentPage(data.blogs.meta.pagination.page);
    }
  }, [data]);
  
  if (error) return null;

  return (
    <section className={styles.MainWidth}>
      <div className={styles.containerNoticias}>    
            <div className={styles.Title}>
              <h3>
                Sempre <span>atualizados</span> <br />
                <strong>ÚLTIMOS <span>CONTEÚDOS</span></strong>
              </h3>
              {pathname === "/" ?
              <Link href={'/Conteudo'}>
                <button className={styles.ButtonConvert}>+ Conteúdos</button>
              </Link>
              :
             
              <button className={styles.ButtonConvert}>+ Contato</button>
        
              }
            </div>
            <div className={styles.CardList} style={{ minHeight: data?.blogs?.data?.length > 1 ? 430 : 0 }}>
              {loading ? (
                <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
              ) : (
                <>
                  {data?.blogs?.data?.map((blogs: any, index: React.Key | null | undefined) => (
                    <CardBlog
                      key={index}
                      backgroundImage={blogs?.attributes?.FotoCard?.data?.attributes?.url}
                      id={blogs?.id}
                      tagImage={''}
                      tagText={blogs?.attributes?.TopicoCard}
                      title={blogs?.attributes?.TituloCard}
                      description={blogs?.attributes?.DescricaoCard} />
                  ))}
                </>
              )}
          </div>
        <div className={styles.PaginationHere}>
            <Pagination
            current={currentPage}
            total={data?.blogs?.meta?.pagination.total}
            pageSize={pageSize}
            style={{
                borderColor: '#c09759!important', // Altera a cor da borda para #c09759
              }}

              size='default'
              itemRender={(current, type, originalElement) => {
                if (type === 'page') {
                  return (
                    <div
                      style={{
                        borderColor: undefined,
                        backgroundColor: current === currentPage ? '#c09759' : undefined,
                        color: current === currentPage ? 'white' : undefined,
                        fontWeight: 'bold',
                        marginTop: undefined,
                        borderRadius: 4,
                        cursor: 'pointer',
                      }}
                    >
                    {current}
                    </div>
                  );
                }
                return originalElement;
              }}
            onChange={(newPage) => {
              setCurrentPage(newPage);
            }}
          />
        </div>
      </div>
    </section>
  );
}
