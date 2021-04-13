import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCard } from "./cardsSlice";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default function AddCard() {
  // card number state
  const [number, setNumber] = useState("");
  // name state
  const [name, setName] = useState("");
  // expiry state
  const [expiry, setExpiry] = useState("");
  // cvc state
  const [cvc, setCvc] = useState("");
  // state for styling and animation
  const [focus, setFocus] = useState("");

  // get the array from slice
  const cardList = useSelector((state) => state.cards.cardList);

  const dispatch = useDispatch();

  // send states to render new card
  const addCard = (e) => {
    e.preventDefault();
    dispatch(
      saveCard({
        number: number,
        name: name,
        expiry: expiry,
        cvc: cvc,
        status: false,
      })
    );
    // reset the states/inputs
    setNumber("");
    setName("");
    setExpiry("");
    setCvc("");
  };

  // Expire date validator
  const validateExpiry = (string) => {
    // month 01-12 is ok, year 21-99 is ok
    const regex = /^(0[1-9]|1[0-2])[2-9][1-9]$/;

    return regex.test(string);
  };

  // Cvc validator
  const validateCvc = (string) => {
    // any digits, must be 3 digits
    const regex = /^\d{3}$/;
    return regex.test(string);
  };

  // Name validator
  const validateName = (string) => {
    // all characters is valid except numbers 0-9, must be atleast 2 characters
    const regex = /^[^0-9]{2,}$/;
    return regex.test(string);
  };

  // Card number validator
  const validateNumber = (string) => {
    // 4-5 followed by 0-9 is ok & 6 followed by 0,2,5 is ok, + 14 digits
    const regex = /^([4-5][0-9]|6[025])\d{14}$/;
    return regex.test(string);
  };

  return (
    <div className="container">
      <h2 className="text-center my-5">ADD A NEW BANK CARD</h2>

      {/* render a preview card */}
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <ul>
        <p className="m-0">
          <strong>Accepted cards</strong>
        </p>
        <li>VISA = start nr 4</li>
        <li>MasterCard = start nr 51-55</li>
        <li>Dankort = start nr 5019</li>
        <li>China UnionPay = start nr 62</li>
        <li>Maestro = start nr 50, 56-59</li>
        <li>Discover = start nr 65</li>
        <li>Hipercard = start nr 60</li>
      </ul>
      <form className="form" onSubmit={addCard}>
        <label htmlFor="vendor">Vendor</label>
        <select className="main-select" name="vendor">
          <option
            onClick={() => {
              const cardNumber = "4";
              setNumber(cardNumber);
            }}
          >
            VISA
          </option>
          <option
            onClick={() => {
              const cardNumber = "55";
              setNumber(cardNumber);
            }}
          >
            MasterCard
          </option>
          <option
            onClick={() => {
              const cardNumber = "5019";
              setNumber(cardNumber);
            }}
          >
            Dankort
          </option>
          <option
            onClick={() => {
              const cardNumber = "62";
              setNumber(cardNumber);
            }}
          >
            China UnionPay
          </option>
          <option
            onClick={() => {
              const cardNumber = "50";
              setNumber(cardNumber);
            }}
          >
            Maestro
          </option>
          <option
            onClick={() => {
              const cardNumber = "65";
              setNumber(cardNumber);
            }}
          >
            Discover
          </option>
          <option
            onClick={() => {
              const cardNumber = "60";
              setNumber(cardNumber);
            }}
          >
            Hipercard
          </option>
        </select>
        <label htmlFor="number">Card number</label>
        <input
          type="tel"
          name="number"
          placeholder="Card Number (max 16 digits)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          minLength="16"
          maxLength="16"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name (max 16 characters)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          minLength="2"
          maxLength="16"
        />
        <label htmlFor="expiry">Expire date</label>
        <input
          type="text"
          name="expiry"
          placeholder="MMYY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          minLength="4"
          maxLength="4"
        />
        <label htmlFor="cvc">Cvc</label>
        <input
          type="tel"
          name="cvc"
          placeholder="CVC (must be 3 digits)"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          minLength="3"
          maxLength="3"
        />
        <div className="text-center mt-4">
          {/* Current cards counter */}
          <p className="m-0">{cardList.length} / 4 cards</p>
          <p className="mb-5">
            {/* If 4 cards in array show message */}
            {cardList.length === 4
              ? "You have the maximum amount of cards"
              : null}
          </p>
        </div>
        <button
          onClick={addCard}
          type="submit"
          className="btn btn-secondary mb-5"
          value="ADD CARD"
          disabled={
            !validateNumber(number) ||
            !validateName(name) ||
            !validateCvc(cvc) ||
            !validateExpiry(expiry) ||
            cardList.length === 4
          }
        >
          ADD CARD
        </button>
      </form>
    </div>
  );
}
