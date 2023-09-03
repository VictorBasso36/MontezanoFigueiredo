import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/mainBanner/banner'
import Convert from '../components/convertClient/convert'
import Footer from '../components/footer/footer'
import Localize from '../components/localize/localize'
import ModalConvert from '../components/modalConvert'
import ModalConvertComponent from '../components/modalConvertComponent'

export default function Contato() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <Banner id='' title=''/>
    </main>
    <ModalConvertComponent/>
    <Localize/>
    <Convert/>    
    <Footer/>
    </>
  )
}
