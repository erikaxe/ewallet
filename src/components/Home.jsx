import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "./cardsSlice";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default function Home() {
  // get the cardList array
  const cardList = useSelector((state) => state.cards.cardList);

  const dispatch = useDispatch();

  // call changeStatus with id
  const setStatus = (id) => {
    dispatch(changeStatus(id));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">E-WALLET</h2>
      <p className="text-center mt-5">CURRENT ACTIVE CARD</p>
      {cardList &&
        cardList.map((item, i) => {
          // if status is true render card, else do nothing
          // Active card div
          return item.status ? (
            <>
              <Cards
                key={i}
                number={item.number}
                name={item.name}
                expiry={item.expiry}
                cvc={item.cvc}
                status={item.status}
                id={i}
              />
            </>
          ) : null;
        })}
      <hr />

      <p className="text-center mt-5">DEACTIVATED CARDS</p>

      {cardList &&
        cardList.map((item, i) => {
          // if status is false render card, else do nothing
          // NON Active card div
          return item.status ? null : (
            <div key={i} onClick={() => setStatus(i)}>
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

      <div className="main-btn mt-5 text-center">
        <p>{cardList.length} / 4 cards</p>
        <p className="mb-4">
          {cardList.length === 4
            ? "You have the maximum amount of cards"
            : null}
        </p>
        <Link to="/addcard">
          <button className="btn btn-dark mb-5">ADD A NEW CARD</button>
        </Link>
      </div>
    </div>
  );
}
