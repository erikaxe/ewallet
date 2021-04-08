import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCard } from "./cardsSlice";

export default function AddCard() {
  // card number state
  const [numberState, setNumberState] = useState("xxxx xxxx xxxx xxxx");
  // name state
  const [nameState, setNameState] = useState("ANDERS ANDERSSON");
  // valid state
  const [validState, setValidState] = useState("xx / xx");
  // card type state
  const [cardState, setCardState] = useState("VISA");

  // submit state
  /* const [submitCard, setSubmitCard] = useState({});
  console.log(submitCard); */

  const dispatch = useDispatch();

  const addCard = () => {
    console.log(`Adding ${cardState}`);

    dispatch(
      saveCard({
        number: numberState,
        name: nameState,
        valid: validState,
        type: cardState,
        isActive: false,
        id: Date.now(),
      })
    );
  };

  /*!!!!!!!!!! FIXA DISPATCH FÖR ATT SKICKA TILL REDUXEN  !!!!!!!!!*/

  /* const onSubmit = () => {
    dispatch(getCards());

    
    setNumberState("xxxx xxxx xxxx xxxx");
    setNameState("ANDERS ANDERSSON");
    setValidState("xx / xx");
    setCardState("VISA");
  }; */

  /* const toggleRed = () => {
    setRed(!red);
  }; */

  return (
    <div className="container">
      <h2 className="text-center mt-5">ADD A NEW BANK CARD</h2>
      <div
        className="bank-card"
        /* style={toggleRed ? { background: "red" } : { background: "gray" }} */
        /* style={cardState === "VISA" ? { background: "red" } : null} */
        /* style={cardState === "American Express" ? { background: "blue" } : null} */
      >
        <h3>{cardState}</h3>
        <p>{numberState}</p>
        <p>{nameState}</p>
        <p>{validState}</p>
      </div>
      {/*!!!!!!!!!!!! FORM STARTS, FIX FORM!!!!!!!!!!*/}

      <form>
        <div className="group">
          <label htmlFor="number">CARD NUMBER</label> <br />
          <input
            type="number"
            name="number"
            onChange={(e) => {
              const cardNumber = e.target.value;
              setNumberState(cardNumber);
              /* setSubmitCard({ cardNumber }); */
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
              /* setSubmitCard({ cardName }); */
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
              /* setSubmitCard({ cardValid }); */
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
              /* setSubmitCard({ selectedCard }); */
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
      </form>
      <button
        onClick={addCard}
        type="submit"
        className="btn btn-secondary mt-5"
        value="ADD CARD"
      >
        ADD CARD
      </button>

      {/*!!!!!!!!!!!! FORM ENDS,  FIX FORM!!!!!!!!!!*/}
    </div>
  );
}
