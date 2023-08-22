import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'

export default function Contato() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner convertText='Estratégia com consciência, responsabilidade e <strong> agilidade. </strong>' title='<h1>CONTATO<strong> PESSOAL</strong></h1>'/>
    </main>
    <Convert/>
    <Footer/>
    </>
  )
}
