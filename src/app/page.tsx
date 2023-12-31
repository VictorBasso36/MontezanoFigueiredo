import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/navbar'
import Banner from './components/mainBanner/banner'
import Convert from './components/convertClient/convert'
import Footer from './components/footer/footer'
import NoticiasLast from './components/ultimasNoticias/noticias.component'
import AtuacaoAreas from './components/atuacao'
import Confiaca from './components/confiancaResultados'
import BannerDestaque from './components/bannerDestaque'
import Numeros from './components/numeros'
import CreditBanner from './components/creditBannner'
import Whatsapp from './components/socialMidia'

export default function Home() {
  return (
    <>
    <Whatsapp transformScale={1} />
    <Navbar/>
    <main className={styles.main}>
      <Banner TempoLeitura={0} TituloPrincipal='' TopicoCard='' bannerURL='' publishedAt='' id='' title=''/>
    </main>
    <Confiaca/>
    <BannerDestaque />
    <AtuacaoAreas/>
    <br />
    <Numeros/>
    <br />
    <br />
    <br />
    <NoticiasLast/>
    <Convert/>
    <Footer/>
    </>
  )
}
