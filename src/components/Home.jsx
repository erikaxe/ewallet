import React, { useState, useDispatch } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeStatus, setActive } from "./cardsSlice";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default function Home() {
  // get the cardList array
  const cardList = useSelector((state) => state.cards.cardList);
  /* const newCardList = useSelector(selectNewCardList); */
  const [active, setActive] = useState(false);
  console.log(active);

  const toggleActive = () => {
    // set false / true on the card
    setActive(!active);
  };

  /* const dispatch = useDispatch(); */

  /* const setStatus = (id) => {
    dispatch(changeStatus(id));
  }; */

  return (
    <div className="container">
      <h2 className="text-center mt-5">E-WALLET</h2>
      <p className="text-center mt-5">CURRENT ACTIVE CARD</p>
      {cardList &&
        cardList.map((item, i) => {
          // if status is true render card, else do nothing
          return item.status ? (
            <div key={i} onClick={toggleActive}>
              <Cards
                key={i}
                number={item.number}
                name={item.name}
                expiry={item.expiry}
                cvc={item.cvc}
                status={item.status}
                id={item.id}
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
            <div key={i} onClick={toggleActive}>
              <Cards
                key={i}
                number={item.number}
                name={item.name}
                expiry={item.expiry}
                cvc={item.cvc}
                status={item.status}
                id={item.id}
              />
            </div>
          );
        })}
      <div className="row">{/* <ul>{loop}</ul> */}</div>

      <div className="main-btn mt-5">
        <Link to="/addcard">
          <button className="btn btn-dark">ADD A NEW CARD</button>
        </Link>
      </div>
    </div>
  );
}
