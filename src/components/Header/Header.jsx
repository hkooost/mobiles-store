import React from 'react';
import styles from './Header.module.scss'
import { BsBox2Heart } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import HeaderBadge from './HeaderBadge';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Mobiles Store</h1>
      <p className={styles.header__desc}>Интернет-магазин смартфонов по низким ценам</p>
      <div className={styles.header__badges}>
        <HeaderBadge icon={<BsBox2Heart />} title={'Полная комплектация'}/>
        <HeaderBadge icon={<IoMdCheckboxOutline />} title={'100% оригинал'}/>
        <HeaderBadge icon={<FaRegStar />} title={'Бесплатная доставка'}/>
      </div>
    </header>
  );
}
