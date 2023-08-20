import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/navbar'
import Banner from './components/mainBanner/banner'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner/>
    </main>
    <Footer/>
    </>
  )
}
