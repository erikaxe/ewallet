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
  // expiry state
  const [expiry, setExpiry] = useState("1218"); /* xx / xx */
  // cvc state
  const [cvc, setCvc] = useState("");
  // package state for styling and animation
  const [focus, setFocus] = useState("");

  // MMYY error state
  const [error, setError] = useState("");
  console.log(error);

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
        id: Date.now(),
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

  /* function validDate(value) {
    let result = false;
    value = value.split("/");
    let pattern = /^\d{2}$/;

    if (value[0] < 1 || value[0] > 12) result = true;

    if (!pattern.test(value[0]) || !pattern.test(value[1])) result = true;

    if (value[2]) result = true;

    if (result) alert("Please enter a valid date in MM/YY format.");
  } */

  const validate = (string) => {
    // year must be atleast 21
    const yearLimit = 21; // or pass this as an argument if you want

    // MMYY must match this
    const regex = /^(?:0[1-9]|1[0-2])(\d{2})$/;
    const match = string.match(regex);
    if (!match) {
      setError("Please enter a valid expire date");
      return false;
    }
    const year = Number(match[1]);
    return year >= yearLimit;
  };

  console.log(
    validate(expiry)
    /* validate("1234"),
    validate("1212"),
    validate("0101"),
    validate("0118"),
    validate("0119") */
  );

  return (
    <div className="container">
      <h2 className="text-center mt-5">ADD A NEW BANK CARD</h2>

      {/* render a preview card */}
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
          /* onClick={(e) => validDate(e.target.value)} */
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          minLength="4"
          maxLength="4"
        />
        <p>{error}</p>
        {/* <button onClick={() => validDate(expiry)}>Validate expire date</button> */}
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
        <button
          onClick={addCard}
          type="submit"
          className="btn btn-secondary mt-5"
          value="ADD CARD"
          disabled={
            number.length < 16 ||
            name.length < 2 ||
            /* expiry.length < 4 || */
            cvc.length < 3 ||
            // validate fungerar inte som tänkt
            validate(expiry)
          }
        >
          ADD CARD
        </button>
      </form>
    </div>
  );
}
