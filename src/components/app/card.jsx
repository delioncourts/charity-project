import React from "react";

const Card = ({ card, cover, handleCompare, flipped }) => {
  const handleClick = () => {
    handleCompare(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          className="cover"
          src={cover}
          onClick={handleClick}
          alt="card cover"
        ></img>
      </div>
    </div>
  );
};

export default Card;
