import React from "react";
import styles from "./card.module.css";

const Card = ({ card, cover, handleCompare, flipped }) => {
  const handleClick = () => {
    handleCompare(card);
  };
  const flippedCard = flipped ? styles.flipped : "";
  return (
    <div className={styles.card}>
      <div className={`${flippedCard}`}>
        <img className={styles.front} src={card.src} alt="card front"></img>
        <img
          className={styles.cover}
          src={cover}
          onClick={handleClick}
          alt="card cover"
        ></img>
      </div>
    </div>
  );
};

export default Card;
