import React from "react";
import styles from "./Footer.module.css";
import FooterCard from "./FooterCard";

function Main(props) {
  const cartItems = [
    {
      title: "title1",
      items: ["item", "item", "item", "item", "item"],
    },
    {
      title: "title2",
      items: ["item", "item", "item", "item", "item"],
    },
    {
      title: "title3",
      items: ["item", "item", "item", "item", "item"],
    },
    {
      title: "title3",
      items: ["item", "item", "item", "item", "item"],
    },
  ];

  const cardList = cartItems.map(item => <FooterCard item= {item}/>)

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-top']}>
       {cardList}
      </div>
      <div className={styles["footer-bottom"]}>
        <p>Copyright @Flipkart.com</p>
      </div>
    </footer>
  );
}

export default Main;
