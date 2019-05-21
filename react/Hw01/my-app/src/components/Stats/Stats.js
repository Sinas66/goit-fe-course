import React from "react";
import styles from "./Stats.module.css";

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.length > 0 &&
        stats.map(el => (
          <li className={styles.item} key={el.id}>
            <p className={styles.label}>{el.label}</p>
            <p className={styles.percentage}>{el.percentage}%</p>
          </li>
        ))}
    </ul>
  </section>
);

export default Stats;
