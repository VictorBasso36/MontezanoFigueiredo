import Image from 'next/image'
import styles from '../page.module.css'


export default function ContentPostagem({ params }: { params: { slug: string } }) {
  return (
    <>
    <h1>Post: {params.slug}</h1>
    
    </>
  )
}
