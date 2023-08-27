"use client";
import Image from 'next/image'
import styles from './navbar.module.css'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();
    const [menu, setMenu] = useState(false);
  
    useEffect(() => {
      if (menu) {
       
        window.scrollTo(0, 0);
        document.body.style.overflowY = 'hidden';
      } else {
       
        document.body.style.overflowY = 'unset';
      }
    }, [menu]);
    
  return (
    <>
        {/* /modal */}
        { menu &&
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.headerContainer}>
                </div>
                <div className={styles.modalLinks}>
                    <ul>
                        <li><Link href="/Quem-Somos"> <p style={{ borderBottom: 'white solid 1px', color: 'var(--suportColor)'}}>GRUPO MF</p></Link></li>
                        <li><Link href="/Areas-de-Atuacao"><p style={{ marginBottom: 'var(--suportColor)', color: pathname.includes('Areas-de-Atuacao') ? 'var(--suportColor)' : 'white' }}>ATUAÇÃO</p></Link></li>
                        <li><Link href="/Conteudo"><p style={{ marginBottom: 'var(--suportColor)', color: pathname.includes('Conteudo') ? 'var(--suportColor)' : 'white' }}>CONTEÚDO</p></Link></li>
                        <li><Link href="/Contato"><p style={{ marginBottom: 'var(--suportColor)', color: pathname.includes('Contato') ? 'var(--suportColor)' : 'white' }}>CONTATO</p></Link></li>
                    </ul>
                    <ul className={styles.ModalsocialMidia}>
                        <li><a href="/" title='Facebook Montezano Figueiredo'><Image src='/fbicon.svg' width={25} height={25} alt={''}></Image></a></li>
                        <li><a href="/" title='Instagram Montezano Figueiredo'><Image src='/instagramicon.svg' width={25} height={25} alt={''}></Image></a></li>
                        <li><a href="/" title='Linkedin Montezano Figueiredo'><Image src='/linkedinicon.svg' width={25} height={25} alt={''}></Image></a></li>
                    </ul>
                </div>
            </div>
        </div>
        }
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
            <Link href="/" title='inicio'>
                <Image className={styles.mainLogoNavbar} src="/navbarlogo.svg" 
                    width={250}
                    height={80}
                    alt="Montezano Figueiredo - GESTÃO TRIBUTÁRIA & PLANEJAMENTO ESTRATÉGICO"/>
            </Link>
            <div className={styles.navbarLinks}>
                <ul className={styles.menuNavbar}>
                    <li><Link href="/Quem-Somos"> <p style={{ borderBottom: 'white solid 1px', color: 'var(--suportColor)'}}>GRUPO MF</p></Link></li>
                    <li><Link href="/Areas-de-Atuacao"><p style={{ marginBottom: 'var(--suportColor)', color: pathname.includes('Areas-de-Atuacao') ? 'var(--suportColor)' : 'white' }}>ATUAÇÃO</p></Link></li>
                    <li><Link href="/Conteudo"><p style={{ marginBottom: 'var(--suportColor)', color: pathname.includes('Conteudo') ? 'var(--suportColor)' : 'white' }}>CONTEÚDO</p></Link></li>
                    <li><Link href="/Contato"><p style={{ marginBottom: 'var(--suportColor)', color: pathname.includes('Contato') ? 'var(--suportColor)' : 'white' }}>CONTATO</p></Link></li>
                    
                </ul>
                <ul className={styles.socialMidia}>
                    <li><a href="/" title='Facebook Montezano Figueiredo'><Image src='/fbicon.svg' width={25} height={25} alt={''}></Image></a></li>
                    <li><a href="/" title='Instagram Montezano Figueiredo'><Image src='/instagramicon.svg' width={25} height={25} alt={''}></Image></a></li>
                    <li><a href="/" title='Linkedin Montezano Figueiredo'><Image src='/linkedinicon.svg' width={25} height={25} alt={''}></Image></a></li>
                </ul>
                <div className={styles.hambMenu} onClick={() => setMenu(!menu)}>
                    <div className={styles.hambMenuContainer}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
    )
}
