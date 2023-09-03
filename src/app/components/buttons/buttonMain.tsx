import Image from 'next/image';
import styles from './buttonMain.module.css';
import React from 'react';
import Link from 'next/link';

interface ButtonSupportProps {
  buttonText: string;
  buttonLink: string;
}

export default function ButtonMain({ buttonText, buttonLink }: ButtonSupportProps) {
  return (
    <Link className={styles.link} href={buttonLink} scroll={true}>
      <button className={styles.banner}>
        <p>{buttonText}</p>
      </button>
    </Link>
  );
}