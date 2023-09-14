import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import AtuacaoAreas from '../components/atuacao'
import Whatsapp from '../components/socialMidia'

export default function Servicos() {
  return (
    <>
    <Whatsapp transformScale={1} />
    <Navbar/>
    <main className={styles.main}>
      <Banner TempoLeitura={0} TituloPrincipal='' TopicoCard='' bannerURL='' publishedAt='' id='' title=''/>
    </main>
    <AtuacaoAreas/>
    <Convert/>
    <Footer/>
    </>
  )
}
