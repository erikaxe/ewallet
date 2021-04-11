import React /* , { useState } */ from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeStatus /* , setActive  */ } from "./cardsSlice";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import { useDispatch } from "react-redux";

export default function Home() {
  // get the cardList array
  const cardList = useSelector((state) => state.cards.cardList);
  /* const newCardList = useSelector(selectNewCardList); */
  /* const [active, setActive] = useState(false); */
  /* const [count, setCount] = useState(0); */

  /* console.log(active); */

  /* const toggleActive = () => {
    // set false / true on the card
     setActive(!active); 
    setCount((prevCount) => prevCount + 1);
    console.log(count); 
  }; */

  const dispatch = useDispatch();

  const setStatus = (e) => {
    console.log("setStatus fired, changeStatus dispatched");
    dispatch(changeStatus(e));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">E-WALLET</h2>
      <p className="text-center mt-5">CURRENT ACTIVE CARD</p>
      {cardList &&
        cardList.map((item, i) => {
          // if status is true render card, else do nothing
          return item.status ? (
            <div key={i} onClick={setStatus}>
              <Cards
                key={i}
                number={item.number}
                name={item.name}
                expiry={item.expiry}
                cvc={item.cvc}
                status={item.status}
                id={i}
              />
            </div>
          ) : null;
        })}
      <hr />

      <p className="text-center mt-5">DEACTIVATED CARDS</p>

      {cardList &&
        cardList.map((item, i) => {
          // if status is false render card, else do nothing
          return item.status ? null : (
            <div key={i} onClick={setStatus}>
              <Cards
                key={i}
                number={item.number}
                name={item.name}
                expiry={item.expiry}
                cvc={item.cvc}
                status={item.status}
                id={i}
              />
            </div>
          );
        })}
      <div className="row">{/* <ul>{loop}</ul> */}</div>

      <div className="main-btn mt-5 text-center">
        <p>{cardList.length} / 4 cards</p>
        <Link to="/addcard">
          <button className="btn btn-dark">ADD A NEW CARD</button>
        </Link>
      </div>
    </div>
  );
}
