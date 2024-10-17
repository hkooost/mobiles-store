import React from 'react';
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>главная</Link>
      <Link to='/smartphones'>смартфоны</Link>
      <Link to='/about'>о нас</Link>
    </nav>
  );
};