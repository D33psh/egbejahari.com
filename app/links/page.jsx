import Link from 'next/link';
import style from './style.module.css'

import Image from "next/image";

export default function Links() {
  return (
    <div className={style.container}>
      <div className={style.profile}>
        <Image src="/BabaJahari.png" alt='Babá Jahari' width={120} height={120} className={style.image} />
      </div>

      <div className={style.box}>
        <Link href="https://wa.me/message/EQFP5IEU2D74L1" className={style.link}>WHATSAPP</Link>
      </div>
      <div className={style.box}>
        <Link href="https://pay.kiwify.com.br/jfMG2xa" className={style.link}>GRUPO VIP</Link>
      </div>
      <div className={style.box}>
        <Link href="https://wa.me/c/5511959659758" className={style.link}>CATALOGO</Link>
      </div>

      <Image src="/IleAse_transparent.png" alt='Ile Ase' width={120} height={200} className={style.image} />
    </div>
  )
}