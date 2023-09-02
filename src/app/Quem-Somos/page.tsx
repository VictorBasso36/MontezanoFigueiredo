import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import CardServico from '../components/cards/cardServico'
import CardAtuacao from '../components/cards/cardAtuacao/caardAtuacao'
import AtuacaoAreas from '../components/atuacao'

export default function QuemSomos() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner />
    </main>
    
    <Convert/>
    <Footer/>
    </>
  )
}
