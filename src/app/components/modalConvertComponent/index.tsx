"use client";
import Image from 'next/image'
import styles from './index.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ModalConvert from '../modalConvert';

export default function ModalConvertComponent() {

  return (
    <div className={styles.mainBackdrop} >
       <div className={styles.mainModal}>
            <div className={styles.mainModalHeader}>
                x
            </div>
            <div className={styles.mainModalContent}>
                <ModalConvert/>
            </div>
       </div>
    </div>
  )
}
