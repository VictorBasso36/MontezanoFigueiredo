import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import NoticiasLast from '../components/ultimasNoticias/noticias.component'

export default function Noticias() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner />
    </main>
    <div className={styles.LastConteudo}>
      <div className={styles.LastConteudoContainer}>
        <div>
          last post
        </div>
        <div>
          image last post
        </div>
      </div>
    </div>
    <NoticiasLast/>
    <Convert/>
    <Footer/>
    </>
  )
}
