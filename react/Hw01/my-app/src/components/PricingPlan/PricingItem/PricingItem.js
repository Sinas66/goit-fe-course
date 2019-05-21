import React from "react"
import styles from "./PricingItem.module.css";

const PricingItem = ({ item }) => (
    <li className={styles.item}>
        <div className={styles.pricingItem}>
            <i className={styles.icon}><img src={item.icon} alt=""/></i>
            <h2 className={styles.labitem}>{item.labitem}</h2>
            <p className={styles.capacity}>{item.capacity}</p>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>{item.price}</p>
            <button className={styles.button}>Get Started</button>
        </div>
    </li>
);

export default PricingItem;
