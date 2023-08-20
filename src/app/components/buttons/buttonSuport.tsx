import Image from 'next/image';
import styles from './buttonSuport.module.css';
import React from 'react';

interface ButtonSupportProps {
  buttonText: string;
  buttonLink: string;
}

export default function ButtonSupport({ buttonText, buttonLink }: ButtonSupportProps) {
  return (
    <a href={buttonLink}>
      <button className={styles.banner}>
        <p>{buttonText}</p>
      </button>
    </a>
  );
}