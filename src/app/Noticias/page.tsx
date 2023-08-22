import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'

export default function Noticias() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner convertText='A Montezano Figueiredo é um Hub de inteligência que alinha a Gestão Tributária e Planejamento Estratégico. ' title='<h1>GESTÃO <strong>TRIBUTÁRIA</strong><span> &</span><br /> PLANEJAMENTO <strong>ESTRATÉGICO</strong></h1>'/>
    </main>
    <Convert/>
    <Footer/>
    </>
  )
}
