import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import AtuacaoAreas from '../components/atuacao'

export default function Servicos() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner id='' title=''/>
    </main>
    <AtuacaoAreas/>
    <Convert/>
    <Footer/>
    </>
  )
}
