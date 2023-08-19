import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
        <Image
          style={{width:'40%', height: 'auto' }}
          className={styles.logo}
          src="/simbolo-areia.png"
          alt="Montezano Figueredo logo"
          width={400}
          height={280}
          priority
        />
    </main>
    </>
  )
}
