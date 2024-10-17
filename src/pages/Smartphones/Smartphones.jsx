import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Smartphones.module.scss";
import MobileCard from "../../components/Card/MobileCard";
import { mobileData } from "../../data";

export default function Smartphones() {
  const [mobiles, setMobiles] = useState(mobileData);

  function handlePriceSort(e) {
    e.stopPropagation();
    if (e.target.value === "priceUp") {
      setMobiles([
        ...mobiles.sort((a, b) => {
          return a.price - b.price;
        }),
      ]);
    } else if (e.target.value === "priceDown") {
      setMobiles([
        ...mobiles.sort((a, b) => {
          return b.price - a.price;
        }),
      ]);
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.mobiles}>
        <div className={styles.mobiles__options}>
          <div className={styles.mobiles__sort}> Сортировать:
            <select className={styles.sort} onChange={handlePriceSort}>
              <option value="priceUp">
                По возрастанию
              </option>
              <option value="priceDown">
                По убыванию
              </option>
            </select>
          </div>
        </div>
        <div className={styles.mobiles__list}>
          {mobiles.map((mobile, index) => (
            <MobileCard mobile={mobile} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
