"use client";
import Image from 'next/image'
import styles from './navbar.module.css'
import { useEffect, useMemo, useState } from 'react'

export default function Navbar() {

const [menu, setMenu] = useState(false)
useEffect(() => {
    if (menu) {
      window.scrollTo(0, 0);
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
                <div>
                    linksHere
                </div>
            </div>
        </div>
        }
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
            <a href="/" title='inicio'>
                <Image className={styles.mainLogoNavbar} src="/navbarlogo.svg" 
                    width={250}
                    height={80}
                    alt="Montezano Figueiredo - GESTÃO TRIBUTÁRIA & PLANEJAMENTO ESTRATÉGICO"/>
            </a>
            <div className={styles.navbarLinks}>
                <ul className={styles.menuNavbar}>
                    <li><a href="/"><p>GRUPO MF</p></a></li>
                    <li><a href="/"><p>ATUAÇÃO</p></a></li>
                    <li><a href="/"><p>NOTÍCIAS</p></a></li>
                    <li><a href="/"><p>CONTATO</p></a></li>
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
