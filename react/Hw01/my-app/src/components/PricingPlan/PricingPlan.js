import React from "react";
import styles from "./PricingPlan.module.css";
import PricingItem from "./PricingItem/PricingItem";

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingPlan}>
    {items.map(el => (
    <PricingItem item={el} key={Math.floor(Math.random() * 1000)}/>
    ))}
  </ul>
);

export default PricingPlan;

// label - название плана
// icon - url иконки
// capacity - размер хранилища
// price - цена за один месяц
// description - описание плана
