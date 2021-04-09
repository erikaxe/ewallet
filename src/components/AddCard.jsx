import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCard } from "./cardsSlice";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default function AddCard() {
  // card number state
  const [number, setNumber] = useState(""); /* xxxx xxxx xxxx xxxx */
  // name state
  const [name, setName] = useState(""); /* ANDERS ANDERSSON */
  // valid state
  const [expiry, setExpiry] = useState(""); /* xx / xx */

  // new cvc state
  const [cvc, setCvc] = useState("");

  // new package state for styling and animation
  const [focus, setFocus] = useState("");

  const dispatch = useDispatch();

  const addCard = (e) => {
    e.preventDefault();
    dispatch(
      saveCard({
        number: number,
        name: name,
        expiry: expiry,
        cvc: cvc,
        /* id: Date.now(), */
        status: false,
      })
    );
    // reset the inputs
    setNumber("");
    setName("");
    setExpiry("");
    setCvc("");
  };

  /* const validate = (number) => {
    let digits = number.toString().split("").map(Number);

    // if it's an even number
    if (digits.length % 2 === 0) {
      digits = digits.map((digit, i) => (i % 2 === 0 ? digit * 2 : digit));
    } else {
      digits = digits.map((digit, i) => (i % 2 === 1 ? digit * 2 : digit));
    }
    console.log(digits);
  }; */

  /* let validateExpire = () => {
    console.log(value);
    if (value.expiry) {
      expiry = "expire date required";
    } else if ([0 - 9] + [0 - 9]) {
      expiry = "expire date is invalid";
    }
  }; */

  return (
    <div className="container">
      <h2 className="text-center mt-5">ADD A NEW BANK CARD</h2>

      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <ul>
        <li>VISA = start nr 4</li>
        <li>MasterCard = start nr 51-55</li>
        <li>Dankort = start nr 5019</li>
        <li>China UnionPay = start nr 62</li>
        <li>Maestro = start nr 50, 56-59</li>
        <li>Discover = start nr 65</li>
        <li>Hipercard = start nr 60</li>
      </ul>
      <form className="form" onSubmit={addCard}>
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
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
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
        <input
          onClick={addCard}
          type="submit"
          className="btn btn-secondary mt-5"
          value="ADD CARD"
        ></input>
      </form>
    </div>
  );
}

/* 
  style={toggleRed ? { background: "red" } : { background: "gray" }}
  style={cardState === "VISA" ? { background: "red" } : null}
  style={cardState === "American Express" ? { background: "blue" } : null}
*/

/* 

<div className="group">
          <label htmlFor="number">CARD NUMBER</label> <br />
          <input
            type="number"
            name="number"
            onChange={(e) => {
              const cardNumber = e.target.value;
              setNumberState(cardNumber);
            }}
            required
            maxLength="16"
          />
        </div>

        <div className="group">
          <label htmlFor="holder">CARD HOLDER</label> <br />
          <input
            type="text"
            name="holder"
            onChange={(e) => {
              const cardName = e.target.value;
              setNameState(cardName);
            }}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="valid">VALID THRU</label> <br />
          <input
            type="number"
            name="valid"
            onChange={(e) => {
              const cardValid = e.target.value;
              setValidState(cardValid);
            }}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="ccv">CCV</label> <br />
          <input type="number" name="ccv" required />
        </div>
        <div className="group">
          <label htmlFor="vendor">VENDOR</label> <br />
          <select
            type="text"
            name="vendor"
            onChange={(e) => {
              const selectedCard = e.target.value;
              setCardState(selectedCard);
            }}
            required
          >
            <option value="" disabled selected hidden>
              Choose a card...
            </option>
            <option value="MasterCard">Mastercard</option>
            <option value="VISA">VISA</option>
            <option value="American Express">American Express</option>
          </select>
        </div>
        <input
          onClick={addCard}
          type="submit"
          className="btn btn-secondary mt-5"
          value="ADD CARD"
        ></input>

*/
