import React from "react";
import Mobile from '../../assets/images/smartphoneCard.webp'
import styles from './MobileCard.module.scss'

export default function MobileCard(props) {
  return (
    <div className={styles.card}>
      <img src={Mobile} alt="Телефон" className={styles.card__img}/>
      <div>
        <h3 className={styles.card__title}>{props.mobile.brand} {props.mobile.model}</h3>
        <h3 className={styles.card__price}>{props.mobile.price}₽</h3>
      </div>
        <button className={styles.card__buy}>Приобрести</button>
    </div>
  )
}