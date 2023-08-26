"use client";
import Image from 'next/image'
import styles from './footer.module.css'
import { useEffect, useMemo, useState } from 'react'

export default function Localize() {

  
  return (
    <section>
        <a href="https://www.google.com.br/maps/place/Montezano+Figueiredo/@-23.5891086,-46.6782698,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce57db97d4eced:0x66c11f49724e760e!8m2!3d-23.5891135!4d-46.6756949!16s%2Fg%2F11thwdy9b6?entry=ttu" target='_blank'>
            <button>
                LOCALIZE-NOS
            </button>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4243772737927!2d-46.678269823724655!3d-23.589108562614012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57db97d4eced%3A0x66c11f49724e760e!2sMontezano%20Figueiredo!5e0!3m2!1spt-BR!2sbr!4v1692927731754!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </a>
    </section>
  )
}
