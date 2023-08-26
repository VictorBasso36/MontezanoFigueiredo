import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import CardServico from '../components/cards/cardServico'
import CardAtuacao from '../components/cards/cardAtuacao/caardAtuacao'

export default function QuemSomos() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner />
    </main>
    <CardServico />
    <CardAtuacao />
    <Convert/>
    <Footer/>
    </>
  )
}
