import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import Localize from '../components/localize/localize'
import ModalConvert from '../components/modalConvert'
import ModalConvertComponent from '../components/modalConvertComponent'
import Whatsapp from '../components/socialMidia'

export default function Contato() {
  return (
    <>
    <Whatsapp transformScale={1} />
    <Navbar/>
    <main className={styles.main}>
      <Banner TempoLeitura={1} TituloPrincipal='' TopicoCard='' bannerURL='' publishedAt='' id='' title=''/>
    </main>
    <ModalConvertComponent/>
    <Localize/>
    <Convert/>    
    <Footer/>
    </>
  )
}
