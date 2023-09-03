"use client"
import Image from 'next/image';
import { blue } from '@ant-design/colors';
import styles from './index.module.css';
import Link from 'next/link';
import CardBlog from '../cards/cardBlog';
import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Divider, Pagination } from 'antd';
import { usePathname } from 'next/navigation';

export default function Loading() {

  return (

     <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    
  );
}
