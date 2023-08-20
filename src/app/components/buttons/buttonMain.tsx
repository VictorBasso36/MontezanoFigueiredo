import Image from 'next/image';
import styles from './buttonMain.module.css';
import React from 'react';

interface ButtonSupportProps {
  buttonText: string;
  buttonLink: string;
}

export default function ButtonMain({ buttonText, buttonLink }: ButtonSupportProps) {
  return (
    <a className={styles.link} href={buttonLink}>
      <button className={styles.banner}>
        <p>{buttonText}</p>
      </button>
    </a>
  );
}