"use client";
import Image from 'next/image'
import styles from './navbar.module.css'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'
import SocialMidiaIcon from '../socialMidiaIcons';

export default function Navbar() {
    const pathname = usePathname();
    const [menu, setMenu] = useState(false);
  
    useEffect(() => {
        if (menu) {
        document.documentElement.style.overflow = "hidden";
          window.scrollTo(0, 0)
        } else {
        document.documentElement.style.overflow = "";
          window.scrollTo(0, 0)
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
                    <div className={styles.ModalsocialMidia}>
                        <SocialMidiaIcon transformScale={1.1}/>
                    </div>
                </div>
            </div>
        </div>
        }
        <nav className={styles.nav} style={{
            backgroundColor: pathname.includes('/Areas-de-Atuacao/Servico/') ? 'var(--mainColor)' : '',
            position: pathname.includes('/Areas-de-Atuacao/Servico/') ? 'fixed' : undefined,
            marginTop: pathname.includes('/Areas-de-Atuacao/Servico/') ? '0px' : '',
            boxShadow: pathname.includes('/Areas-de-Atuacao/Servico/') ? 'black 0px 7px 29px 0px' : '',
        }}>


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
                <div className={styles.socialMidia}>
                    <SocialMidiaIcon transformScale={1.1}/>
                </div>
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
