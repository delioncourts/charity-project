import Card from "../../components/app/card";
import styles from "./game-page.module.css";
import { useEffect, useState } from "react";

const img1 = "../../../public/cards/icon_1.png";
const img2 = "../../../public/cards/icon_2.png";
const img3 = "../../../public/cards/icon_3.png";
const img4 = "../../../public/cards/icon_4.png";
const img5 = "../../../public/cards/icon_5.png";
const img6 = "../../../public/cards/icon_6.png";
const img7 = "../../../public/cards/icon_7.png";
const img8 = "../../../public/cards/icon_8.png";

const cover = "../../../public/cover.png";

const allCards = [
  { src: img1, matched: false },
  { src: img2, matched: false },
  { src: img3, matched: false },
  { src: img4, matched: false },
  { src: img5, matched: false },
  { src: img6, matched: false },
  { src: img7, matched: false },
  { src: img8, matched: false },
];

const GamePage = () => {
  const [curCards, setCurCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const shuffleCards = () => {
    //double each card
    const doubledAndMixedCards = [...allCards, ...allCards]
      //randomize the order with "sort"
      .sort(() => Math.random() - 0.5)
      //index randomly each card
      .map((card) => ({ ...card, id: Math.random() }));

    //add doubled and mixed and indexed cards into current array for the game
    setCurCards(doubledAndMixedCards);

    //start with 0 moves made
    setMoves(0);
  };

  //logic for handling the click on a card
  const [firstClick, setFirstClick] = useState(null);
  const [secondClick, setSecondClick] = useState(null);
  const handleCompareCards = (card) => {
    firstClick ? setSecondClick(card) : setFirstClick(card);
  };

  //logic for comparing cards; should only work when state is ALREADY updated, re-evaluate when state changes => hense useEffect() and ONLY if both cards are clicked
  useEffect(() => {
    if (firstClick && secondClick) {
      if (firstClick.src === secondClick.src) {
        //if they match, keep them flipped; we need to update our current set of cards, pick the selected cards and make their "matched: true" and return a new array
        setCurCards((prev) => {
          return prev.map((card) => {
            if (card.src === firstClick.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        reset();
      } else {
        //if they don't match, just flip over
        setTimeout(() => reset(), 1000);
      }
    }
  }, [firstClick, secondClick]);

  console.log(curCards);

  //reset to choose cards further
  const reset = () => {
    setFirstClick(null);
    setSecondClick(null);
    setMoves((prev) => prev + 1);
  };

  //render
  return (
    <div className={styles.main}>
      <h1 className={styles.name}>Memory Game</h1>
      <div className={styles.cards_container}>
        {/* <div className={styles.white_rectangle}></div>
        <div className={styles.blue_rectangle}></div> */}
        {curCards.map((card) => (
          <Card
            key={card.id}
            card={card}
            cover={cover}
            handleCompare={handleCompareCards}
            flipped={
              card === firstClick || card === secondClick || card.matched
            }
          />
        ))}
      </div>
      <p className={styles.moves}>Moves made: {moves}</p>
      <button className={styles.btn_start} onClick={shuffleCards}>
        <img src="../../../public/Vector.png"></img>
      </button>
    </div>
  );
};

export default GamePage;
